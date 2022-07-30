require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const DATABASE = require("./utilities/createDB");
const TABLES = require("./utilities/createTables");
const cred = require("./utilities/credentials");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const { s3Uploadv2 } = require("./s3Service");
const uuid = require("uuid").v4;
const { S3 } = require("aws-sdk");
class VVGNLI {
  constructor(port, app) {
    this.port = port;
    this.app = app;
    this.app.use(cors());
    // used to grab frontend infor to backend
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.temp = 0;
    //Initialize Database
    new DATABASE().initDB();
    //Initialize All The Tables
    new TABLES().initTable();
    this.db = mysql.createConnection({
      ...cred,
      database: "vvgnli_sih",
    });
  }

  get() {
    this.app.get("/api/vvgnli/getPendingPhotos", (req, res) => {
      const getPendingPhotosSql = "select m.mediaURL, p.userName from media_details m, post_details p where p.mediaId = m.mediaId and p.status = 2 and m.fileType = 1";
      this.db.query(getPendingPhotosSql, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "some error occured please check it once"
          });
        } else {
          return res.status(200).json({
            message: "successfully fetched",
            pendingPhotosArray: result
          });
        }
      })
    })
    this.app.get("/api/vvgnli/getPendingVideos", (req, res) => {
      const getPendingPhotosSql = "select m.mediaURL, p.userName from media_details m, post_details p where p.mediaId = m.mediaId and p.status = 2 and m.fileType = 2";
      this.db.query(getPendingPhotosSql, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "some error occured please check it once"
          });
        } else {
          return res.status(200).json({
            message: "successfully fetched",
            pendingVideosArray: result
          });
        }
      })
    })
    this.app.get("/api/vvgnli/getApprovedPhotos", (req, res) => {
      const getPendingPhotosSql = "select m.mediaURL, p.userName from media_details m, post_details p where p.mediaId = m.mediaId and p.status = 1 and m.fileType = 1";
      this.db.query(getPendingPhotosSql, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "some error occured please check it once"
          });
        } else {
          return res.status(200).json({
            message: "successfully fetched",
            approvedPhotosArray: result
          });
        }
      })
    })
    this.app.get("/api/vvgnli/getApprovedVideos", (req, res) => {
      const getPendingPhotosSql = "select m.mediaURL, p.userName from media_details m, post_details p where p.mediaId = m.mediaId and p.status = 1 and m.fileType = 2";
      this.db.query(getPendingPhotosSql, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "some error occured please check it once"
          });
        } else {
          return res.status(200).json({
            message: "successfully fetched",
            approvedVideosArray: result
          });
        }
      })
    })
    this.app.get("/api/vvgnli/getCommentsOnPost", (req, res) => {
      const mediaId = req.query.mediaId;
      const getCommentsOnPostSql = "select fullName, commentData from comment_details where mediaId = ?";
      this.db.query(getCommentsOnPostSql, [mediaId], (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "some error occured please check it once"
          });
        } else {
          return res.status(200).json({
            message: "successfully fetched",
            commentsArray: result
          });
        }
      })
    })
    this.app.get("/api/vvgnli/getLikedPosts", (req, res) => {
      const userId = req.query.userId;
      const getLikedPostsSql = "select mediaId from like_details where userId = ?";
      this.db.query(getLikedPostsSql, [userId], (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "some error occured please check it once"
          });
        } else {
          return res.status(200).json({
            message: "successfully fetched",
            likedPostsArray: result
          });
        }
      })
    })
  }

  post() {

    const storage = multer.memoryStorage()

    const fileFilter = (req, file, cb) => {
      if (file.mimetype.split("/")[0] === 'image' ||
        file.mimetype.split("/")[0] === 'video') {
        cb(null, true)
      } else {
        cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false)
      }
    }
    // Limits ( fileSize & number of files ) can be changed according to requirements
    const upload = multer({ storage, fileFilter, limits: { fileSize: 40000000 }, files: 10 });
    this.app.post("/api/vvgnli/upload", upload.array("file"), async (req, res) => {
      try {
        const results = await s3Uploadv2(req.files);
        console.log("result data ->", results)
        console.log("result - > ", new Date())
      } catch (err) {
        console.log(err);
      }

      let numberOfFiles = results.length;
      console.log("num - > ", new Date())
      this.db.query('Insert into media_details(mediaId, mediaURL, fileName, fileType, currentTimeStamp) values ?',
        [results.map(result => [result.Key.split("/")[1], result.Location, result.Key.split("-").pop(),
        (result.Key.split(".").pop() === "jpeg" || result.Key.split(".").pop() === "jpg" || result.Key.split(".").pop() === "png")
          ? 1 : 2, new Date()])], (err, result) => {
            console.log("first - > ", new Date())
            if (err) {
              console.log(err);
              return res.status(500).json({
                message: "some error occured please check it once"
              });
            } else {
              console.log("num of files - > ", numberOfFiles)
              const getMediaId = "select mediaId from media_details order by currentTimeStamp desc limit ?";
              this.db.query(getMediaId, [numberOfFiles], (err, result) => {
                console.log("second - > ", new Date())
                if (err) {
                  console.log(err);
                  return res.status(500).json({
                    message: "some error occured please check it once"
                  });
                } else {
                  console.log(result)
                  console.log("thrid - > ", new Date())
                  return res.status(200).json({
                    message: "successfully uploaded",
                    mediaIdArray: result
                  });
                }
              }
              )
            }

          })
    })

    this.app.use((error, req, res, next) => {
      if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({
            message: "file is too large"
          });
        }

        if (error.code === 'LIMIT_FILE_COUNT') {
          return res.status(400).json({
            message: "file limit reached"
          });
        }

        if (error.code === 'LIMIT_UNEXPECTED_FILE') {
          return res.status(400).json({
            message: "file must be image or video type"
          });
        }
      }
    })

    this.app.post("/api/vvgnli/postHandle", (req, res) => {
      const { userId, mediaIdArray, userName } = req.body;
      const userRoleSql = 'select userRole from signup_details where userId = ?';
      this.db.query(userRoleSql, [userId], (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "some error occured please check it once"
          });
        } else {
          let userRole = result[0].userRole;
          let status = 2; // 2 for pending status
          if (userRole === 1) {
            status = 1;
          }
          this.db.query('Insert into post_details(userId, mediaId, status, userName) values ?',
            [mediaIdArray.map(mediaIdSingle => [userId, mediaIdSingle.mediaId, status, userName])], (err, result) => {

              if (err) {
                console.log(err);
                
                if (err.code === "ER_DUP_ENTRY") {
                  res.status(400).send({ success: false, message: 'Duplicate Entry' });
                }
                return res.status(500).json({
                  message: "some error occured please check it once"
                });
              } else {
                return res.status(200).json({
                  message: "post successfully goes into db"

                });
              }

            })
        }
      })
    })

    this.app.post("/api/vvgnli/updatePostStatus", (req, res) => {
      const { mediaId, postStatus, userName } = req.body;
      if (postStatus === 1) {
        // update status in post_details from pending to approved
        const updateStatusSql = "update post_details set status = 1 where mediaId = ?";
        this.db.query(updateStatusSql, [mediaId], (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              message: "some error occured please check it once"
            });
          } else {
            return res.status(200).json({
              message: "approved successfully"
            });
          }
        })
      } else {
        // delete mediaId from media_details , post_details & also delete objects from s3
        const postTableDelete = "delete from post_details where mediaId = ?";
        this.db.query(postTableDelete, [mediaId, userName], (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              message: "some error occured please check it once"
            });
          } else {
            const mediaTableDelete = "delete from media_details where mediaId = ?";
            this.db.query(mediaTableDelete, [mediaId], (err, result) => {
              if (err) {
                console.log(err);
                return res.status(500).json({
                  message: "some error occured please check it once"
                });
              } else {

                const s3 = new S3({
                  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                });

                const params = {
                  Bucket: process.env.AWS_BUCKET_NAME,
                  Key: `uploads/${mediaId}`
                };

                s3.deleteObject(params, (error, data) => {
                  if (error) {
                    res.status(500).send(error);
                  }
                  return res.status(200).json({
                    message: "File has been deleted successfully"
                  });
                });
              }
            })
          }
        })
      }
    })

    this.app.post("/api/vvgnli/like", (req, res) => {
      const { userId, mediaId, likeStatus } = req.body;
      if (likeStatus === 1) {
        const likeSql = "insert into like_details values(?,?,?)";
        this.db.query(likeSql, [userId, mediaId, likeStatus], (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              message: "some error occured please check it once"
            });
          } else {
            return res.status(200).json({
              message: "liked successfully"
            });
          }
        })
      } else {
        const dislikeSql = 'delete from like_details where userId = ? and mediaId = ?';
        this.db.query(dislikeSql, [userId, mediaId], (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              message: "some error occured please check it once"
            });
          } else {
            return res.status(200).json({
              message: "disliked successfully"
            });
          }
        })
      }
    })

    this.app.post("/api/vvgnli/comment", (req, res) => {
      const { mediaId, commentData, userId } = req.body;
      let nameSql = "select CONCAT(fname , ' ' , lname) as Name from signup_details where userId = ?";
      this.db.query(nameSql, [userId], (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "some error occured please check it once"
          });
        } else {
          const fullName = result[0].Name;
          let commentSql = 'insert into comment_details(mediaId, commentData, userId, fullName) values (?,?,?,?)';
          this.db.query(commentSql, [mediaId, commentData, userId, fullName], (err, result) => {
            if (err) {
              console.log(err);
              return res.status(500).json({
                message: "some error occured please check it once"
              });
            } else {
              return res.status(200).json({
                message: "comment successfully"
              });
            }
          })
        }
      })
    });

    this.app.post("/api/vvgnli/signup", (req, res) => {
      const {
        fname,
        lname,
        fatherName,
        gender,
        dateOfBirth,
        religion,
        phoneNumber,
        userName,
        emailAddress,
        password,
        userRole,
        addressL1,
        addressL2,
        city,
        state,
        country,
        zipCode,
      } = req.body;

      console.log("data user_details insertion start!!");
      let sqlAddress = `INSERT INTO address_details (addressL1, addressL2, city, state, country, zipCode) VALUES (?,?,?,?,?,?)`;
      this.db.query(
        sqlAddress,
        [addressL1, addressL2, city, state, country, zipCode],
        (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              message: "some error occured please check it once"
            });
          } else {
            console.log("Address record inserted");
            let addressIdFetchSqlQuery =
              "SELECT addressId FROM address_details ORDER BY addressId DESC LIMIT 1";
            let addressId = 0;
            this.db.query(addressIdFetchSqlQuery, (err, result) => {
              if (err) {
                console.log(err);
                return res.status(500).json({
                  message: "some error occured please check it once"
                });
              } else {
                addressId = result[0].addressId;
                let signSql = `INSERT INTO signup_details (fname, lname, fatherName, gender, dateOfBirth, religion, phoneNumber, userName, emailAddress, userRole, addressId) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
                this.db.query(
                  signSql,
                  [
                    fname,
                    lname,
                    fatherName,
                    gender,
                    dateOfBirth,
                    religion,
                    phoneNumber,
                    userName,
                    emailAddress,
                    userRole,
                    addressId,
                  ],
                  (err, result) => {
                    if (err) {

                      if (err.code === "ER_DUP_ENTRY") {
                        res
                          .status(200)
                          .send({
                            success: true,
                            message:
                              "Duplicate Entry for this Email Address, please enter different User Name",
                          });
                      }
                    } else {
                      console.log("User Details record inserted");
                      let userIdFetchSqlQuery =
                        "SELECT userId FROM signup_details ORDER BY userId DESC LIMIT 1";
                      let userId = 0;
                      this.db.query(userIdFetchSqlQuery, (err, result) => {
                        if (err) {
                          console.log(err);
                          return res.status(500).json({
                            message: "some error occured please check it once"
                          });
                        }
                        else {
                          userId = result[0].userId;
                          const lastSignedIn = new Date();
                          // Make Constants if possible
                          let sqlLogin = `INSERT INTO login_details (userId,password) values 
                                                            (?,aes_encrypt(?,"VVGNLI_SIH"))`;
                          this.db.query(
                            sqlLogin,
                            [userId, password],
                            (err, result) => {
                              if (err) throw err;
                              else {
                                console.log("record inserted in login");
                                res
                                  .status(200)
                                  .send({
                                    success: true,
                                    message:
                                      "User Account created successfully, Now you can login with you credentials",
                                  });
                              }
                            }
                          );
                        }
                      });
                    }
                  }
                );
              }
            });
          }
        }
      );
    });

    this.app.post("/api/vvgnli/loginValidate", (req, res) => {
      const { emailAddress, password, userRole } = req.body;

      let userLoggedIdSql = `SELECT userId from signup_details where signup_details.emailAddress in (?) and signup_details.userRole in (?)`;
      this.db.query(
        userLoggedIdSql,
        [emailAddress, userRole],
        (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              message: "some error occured please check it once"
            });
          } else {
            console.log("fetched id");
            console.log(result);
            if (result.length === 0) {
              res
                .status(200)
                .send({
                  success: false,
                  message:
                    "You are not registered with us, please signup first",
                });
            } else {
              const loggedUserId = result[0].userId;
              console.log(loggedUserId);
              let loginSql = `SELECT * FROM login_details log where log.userId in (?) and log.password = aes_encrypt(?,"VVGNLI_SIH")`;
              this.db.query(
                loginSql,
                [loggedUserId, password],
                (err, result) => {
                  if (err) {
                    console.log(err);
                    return res.status(500).json({
                      message: "some error occured please check it once"
                    });
                  } else if (result.length == 0) {
                    res
                      .status(200)
                      .send({
                        success: false,
                        message:
                          "You are not registered with us, please signup first",
                      });
                  } else {
                    res
                      .status(200)
                      .send({
                        success: true,
                        message: "You are logged in, Welcome to VVGNLI",
                      });
                  }
                }
              );
            }
          }
        }
      );
    });
  }
  listen() {
    this.app.listen(this.port, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "some error occured please check it once"
        });
      }
      else console.log(`Server Started On ${this.port}`);
    });
  }
}
let vvgli = new VVGNLI(3001, express());
vvgli.get();
vvgli.listen();
vvgli.post();
vvgli.get();
