function stockSpan(nums) {
    const n = nums.length;
    const stack = [];
    const span = new Array(n);
    span[0] = 1
  
    // Push index of first element onto stack
    stack.push(0);
  
    for (let i = 1; i < n; i++) {
      while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
        stack.pop();
      }
  
      // Calculate span for current day
      span[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
  
      // Push current index onto stack
      stack.push(i);
    }
  
    return span;
  }