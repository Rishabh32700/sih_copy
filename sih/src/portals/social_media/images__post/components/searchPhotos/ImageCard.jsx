import React, { useState } from "react";
import { Modal, Space, Typography, Input, Button } from "antd";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import axios from "axios";
import config from "../../../../../ApiConfig/Config";
const { Text } = Typography;

const ImageCardCommunity = ({ image }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  var userFromSession = JSON.parse(sessionStorage.getItem("user"));
  const userId = userFromSession.userId;
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleClickLike = async () => {
    try {
      const res = await axios.post(
        config.server.path + config.api.like,
        {
          mediaId: image.mediaId,
          likeStatus: "1",
          userId: userId,
        },
        {
          headers: { "User-Id": userId },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickDislike = async () => {
    try {
      const res = await axios.post(
        config.server.path + config.api.like,
        {
          mediaId: image.mediaId,
          likeStatus: "2",
          userId: userId,
        },
        {
          headers: { "User-Id": userId },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitComment = async () => {
    try {
      const res = await axios.post(
        config.server.path + config.api.comment,
        {
          mediaId: image.mediaId,
          userId: userId,
          commentData: comment,
        },
        {
          headers: { "User-Id": userId },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="image__card__community">
      <div className="image__card__community__image">
        <div className="card">
          <img
            src={image.mediaURL}
            alt="images"
            onClick={() => {
              showModal();
            }}
          />
        </div>
      </div>
      <div className="image__card__community__modal">
        <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className="modal__image">
            <img
              src={image.mediaURL}
              alt="images"
              height="300"
              onClick={() => {
                console.log("hey", image.mediaURL);
                showModal();
              }}
            />
          </div>
          <div className="modal__image__detail__count">
            <Space>
              <Text>{image.totalLikeCount} Likes</Text>
              <Text>{image.totalCommentCount} Comments</Text>
            </Space>
          </div>
          <div className="modal__image__action">
            <div className="modal__image__action__like modal__image__action__icon">
              <ThumbUpIcon
                style={{ fill: "#0072ea" }}
                onClick={handleClickLike}
              />
            </div>
            <div className="modal__image__action__dislike modal__image__action__icon">
              <ThumbDownIcon
                style={{ fill: "#0072ea" }}
                onClick={handleClickDislike}
              />
            </div>
          </div>
          <div className="modal__image__comment">
            <div className="modal__image__comment__input">
              <Input
                placeholder="Add a comment"
                style={{ width: "80%" }}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="modal__image__comment__submit">
              <Button onClick={handleSubmitComment}>Add Comment</Button>
            </div>
          </div>

          <div className="modal__images__comments">
            <div className="modal__images__comments__byUser">
              Name : Nand Kumar <br />
              Date : 2 August 2022 <br />
              Comment: Very NOice Pic
            </div>
            <div className="modal__images__comments__byUser">
              Name : Nand Kumar <br />
              Date : 2 August 2022 <br />
              Comment: Very NOice Pic
            </div>
            <div className="modal__images__comments__byUser">
              Name : Nand Kumar <br />
              Date : 2 August 2022 <br />
              Comment: Very NOice Pic
            </div>
            <div className="modal__images__comments__byUser">
              Name : Nand Kumar <br />
              Date : 2 August 2022 <br />
              Comment: Very NOice Pic
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ImageCardCommunity;
