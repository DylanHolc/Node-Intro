function mean(nums) {
    if (nums.length === 0) return 0;
    let total = 0
    let count = 0
    for (let num of nums) {
        total += num;
        count++;
    }
    return total / count;
}

function median(nums) {

    nums.sort((a, b) => a - b);

    if (nums.length % 2 != 0) {
        return nums[Math.floor(nums.length / 2)];
    }
    else {
        return (nums[(nums.length / 2) - 1] + nums[nums.length / 2]) / 2;
    }
}

function mode(nums) {
    let frequencyMap = {};
    nums.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    })

    let modes = [];
    let mostFrequent = 0

    for (let val in frequencyMap) {
        let frequency = frequencyMap[val];
        if (frequency > mostFrequent) {
            mostFrequent = frequency;
            modes = [parseInt(val)]
        }
        else if (frequency === mostFrequent) {
            modes.push(parseInt(val));
        }
    }
    return modes;
}

function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];

    for (let i = 0; i < numsAsStrings.length; i++) {
        let valToNumber = Number(numsAsStrings[i]);

        if (Number.isNaN(valToNumber)) {
            return new Error(
                `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
            );
        }

        result.push(valToNumber);
    }
    return result;
}


module.exports = { mean, median, mode, convertAndValidateNumsArray }