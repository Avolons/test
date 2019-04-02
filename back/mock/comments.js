import Mock from "mockjs";
import { getParams } from "_b/libs/util";

let commentsList = [];

for (let i = 0; i < 100; i++) {
  commentsList.push(
    Mock.mock({
      content: "@cparagraph(1)",
      commenter: "@cname",
      comment_time: "@datetime",
      course_info: "@cparagraph(1)",
      "status|1": ["1", "2", "3", "4", "5"]
    })
  );
}
export const getCommentsList = req => {
  return commentsList;
};
