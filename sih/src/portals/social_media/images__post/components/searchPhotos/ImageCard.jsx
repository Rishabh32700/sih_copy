import React, { useState } from "react";
import { Modal, Space, Typography, Input, Button } from "antd";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
const { Text } = Typography;

const ImageCardCommunity = ({ image }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
              <Text>123 Likes</Text>
              <Text>123 Comments</Text>
            </Space>
          </div>
          <div className="modal__image__action">
            <div className="modal__image__action__like modal__image__action__icon">
              <ThumbUpIcon style={{ fill: "#0072ea" }} />
            </div>
            <div className="modal__image__action__dislike modal__image__action__icon">
              <ThumbDownIcon style={{ fill: "#0072ea" }} />
            </div>
          </div>
          <div className="modal__image__comment">
            <div className="modal__image__comment__input">
              <Input placeholder="Add a comment" style={{ width: "80%" }} />
            </div>
            <div className="modal__image__comment__submit">
              <Button>Add Comment</Button>
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
