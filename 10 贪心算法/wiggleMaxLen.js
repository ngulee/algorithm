function wiggleMaxLen(nums) {
  const BEGIN = 0;
  const UP = 1;
  const DOWN = 2;
  let STATE = BEGIN;
  let PREV_STATE = STATE;
  let MAX_LENGTH = 1;
  const numsLen = nums.length;
  const result = [];

  for (let i = 1; i < numsLen; i++) {
    switch (STATE) {
      case BEGIN : {
        if(nums[i] > nums[i -1]) {
          STATE = UP;
          MAX_LENGTH++;
        } else if(nums[i] < nums[i -1]) {
          STATE = DOWN;
          MAX_LENGTH++;
        }
        break;
      }
      case UP : {
        if(nums[i] < nums[i -1]) {
          STATE = DOWN;
          MAX_LENGTH++;
        }
        break;
      }
      case DOWN : {
        if(nums[i] > nums[i + 1]) {
          STATE = UP;
          MAX_LENGTH++;
        }
        break;
      }
    }

    if (STATE !== PREV_STATE) {
      result.push(nums[i - 1]);
      PREV_STATE = STATE;
    }
  }

  if (numbers[numsLen - 1] !== result[result.length - 1]) {
    result.push(numbers[numsLen - 1])
  }

  return {
    result,
    MAX_LENGTH
  };
}

const numbers = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];

console.log('numbers:', wiggleMaxLen(numbers))