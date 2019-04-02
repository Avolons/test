import Mock from "mockjs";
import { getParams } from "_b/libs/util";

let activitiesList = [];

for (let i = 0; i < 100; i++) {
  activitiesList.push(
    Mock.mock({
      name: "@name",
      "type|1": ["课程类型1", "课程类型2", "课程类型3", "课程类型4"],
      startTime: "@datetime",
      "place|1": ["分享学校", "校，县", "省级"],
      publicTime: "@datetime",
      concern: "@integer(0,100)",
      "status|1": ["1", "2", "3", "4", "5"]
    })
  );
}
export const getActivitiesList = req => {
  return activitiesList;
};
