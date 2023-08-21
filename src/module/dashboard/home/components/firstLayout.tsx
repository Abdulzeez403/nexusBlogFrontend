import React, { useState } from "react";
import { Col, Row, Slider } from "antd";
import { BiDotsVertical } from "react-icons/bi";

const FirstLayout: React.FC = () => {
  return (
    <Row>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 0 }}>
        <div className="shadow-lg my-2 p-4 px-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-[1rem]">Posts</h4>
              <h4 className="font-extra-bold text-[2rem] my-2">300k</h4>
            </div>
            <div>
            <BiDotsVertical size={20}/>

            </div>
          </div>

          <div>wave</div>
        </div>
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <div className="shadow-lg my-2 p-4 px-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-[1rem]">Blog</h4>
              <h4 className="font-extra-bold text-[2rem] my-2">200k</h4>
            </div>
            <div>
              <BiDotsVertical size={20}/>
            </div>
          </div>

          <div>wave</div>
        </div>
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <div className="shadow-lg my-2 p-4 px-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-[1rem]">Comments</h4>
              <h4 className="font-extra-bold text-[2rem] my-2">100k</h4>
            </div>
            <div>
            <BiDotsVertical size={20}/>

            </div>
          </div>

          <div>wave</div>
        </div>
      </Col>
    </Row>
  );
};
export default FirstLayout;
