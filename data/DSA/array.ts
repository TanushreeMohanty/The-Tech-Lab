import { TopicContent } from "../content";

export const arrayContent: Record<string, TopicContent> = {
  lques: {
    id: "lques",
    title: "Leetcode Questions",
    description:
      "This is a demonstration of the first subtopic in the new section.",
    blocks: [
      {
        subTitle: "Leetcode 1: Two Sum (Brute Force)",
        text: "The simplest way to find two numbers that add up to a target is to check every possible pair. This uses a nested loop, resulting in O(n²) time complexity.",
        code: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] == target) {
                    // Directly returning the array saves memory and time
                    return new int[] { i, j };
                }
            }
        }
        // Return an empty array if no solution is found
        return new int[] {};
    }
}`,
      },
      {
        subTitle: "Leetcode 217",
        text: "abc",
        code: `import java.util.Arrays;
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);
        int n= nums.length;
        for(int i=0;i<n-1;i++){
            if(nums[i]==nums[i+1]){
                return true;
            }
        }
        return false;
    }
}
`,
      },
      {
        subTitle: "Leetcode 219 (FAANG)",
        text: "abc",
        code: `
        class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        int n=nums.length;
        for(int i=0;i<n;i++){
            for(int j=i+1;j<n && (j-i)<=k;j++){
                if(nums[i] == nums[j] ){
                    return true;
                }
            }
        }
        return false;
    }
}
`,
      },
      {
        subTitle: "Leetcode 242",
        text: "abc",
        code: `
        import java.util.Arrays;

class Solution {
    public boolean isAnagram(String s, String t) {
        // 1. If lengths are different, they can't be anagrams
        if (s.length() != t.length()) {
            return false;
        }

        // 2. Convert strings to character arrays
        char[] sChars = s.toCharArray();
        char[] tChars = t.toCharArray();

        // 3. Sort both arrays
        Arrays.sort(sChars);
        Arrays.sort(tChars);

        // 4. Compare the sorted arrays
        return Arrays.equals(sChars, tChars);
    }
}
`,
      },
      {
        subTitle: "Leetcode 49 (FAANG)",
        text: "abc",
        code: `
        class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // Will do later as IDK the data structure
    }
}
`,
      },
      {
        subTitle: "Leetcode 238 (FAANG)",
        text: "abc",
        code: `
        class Solution {
    public int[] productExceptSelf(int[] nums) {
        //This is gemini logic not mine so need to study it
        int n = nums.length;
        int[] result = new int[n];
        
        // Step 1: Calculate Prefix products
        // result[i] will store the product of all elements to the left of i
        result[0] = 1;
        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }
        
        // Step 2: Calculate Suffix products on the fly
        // Multiply the existing prefix product by the product of all elements to the right
        int suffix = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] = result[i] * suffix;
            suffix *= nums[i];
        }
        
        return result;
    }
}
`,
      },
      {
        subTitle: "Leetcode 347 (FAANG)",
        text: "abc",
        code: `//This is gemini logic not mine so need to study it
import java.util.Arrays;

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        // 1. Sort to group duplicates: [1,1,1,2,2,3]
        Arrays.sort(nums);
        
        // 2. Count unique elements to know how big our frequency array should be
        int uniqueCount = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i == 0 || nums[i] != nums[i-1]) uniqueCount++;
        }

        // 3. Store [number, frequency] in a 2D array
        int[][] frequencies = new int[uniqueCount][2];
        int index = -1;
        for (int i = 0; i < nums.length; i++) {
            if (i == 0 || nums[i] != nums[i-1]) {
                index++;
                frequencies[index][0] = nums[i]; // The number
                frequencies[index][1] = 1;       // Start count
            } else {
                frequencies[index][1]++;         // Increment count
            }
        }

        // 4. Sort the 2D array by the frequency (index 1) in descending order
        // This is a bit advanced, but it's how you sort 2D arrays in Java
        Arrays.sort(frequencies, (a, b) -> Integer.compare(b[1], a[1]));

        // 5. Take the first k numbers
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = frequencies[i][0];
        }

        return result;
    }
}
`,
      },
      {
        subTitle: "Leetcode 13 (FAANG)",
        text: "abc",
        code: `class Solution {
    public int romanToInt(String s) {
        String[] symbols = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        
        int ans = 0;
        int i = 0;
        
        // Use a while loop so we can jump forward by 1 or 2 characters
        while (i < s.length()) {
            for (int j = 0; j < symbols.length; j++) {
                // Check if the string starting at 'i' matches the symbol
                if (s.startsWith(symbols[j], i)) {
                    ans += values[j];
                    // Move 'i' forward by the length of the symbol (1 or 2)
                    i += symbols[j].length();
                    break; // Found the match, jump back to the while loop
                }
            }
        }
        
        return ans;
    }
}
`,
      },
      {
        subTitle: "Leetcode 953 (FAANG)",
        text: "abc",
        code: `import java.util.Arrays;
class Solution {
    public boolean isAlienSorted(String[] words, String order) {
        // Will do later as IDK the data structure
    }
}
`,
      },
      {
        subTitle: "Leetcode 128 (FAANG)",
        text: "abc",
        code: `//This is gemini logic not mine so need to study it
import java.util.Arrays;

class Solution {
    public int longestConsecutive(int[] nums) {
        if (nums.length == 0) return 0;

        Arrays.sort(nums);
        
        int longest = 1;
        int currentStreak = 1;

        for (int i = 0; i < nums.length - 1; i++) {
            // 1. Skip duplicates
            if (nums[i] == nums[i + 1]) {
                continue;
            }
            
            // 2. Check if the next number is consecutive
            if (nums[i] + 1 == nums[i + 1]) {
                currentStreak++;
            } else {
                // 3. Streak broken! Save the max and reset
                longest = Math.max(longest, currentStreak);
                currentStreak = 1;
            }
        }

        // Final check to see if the last streak was the longest
        return Math.max(longest, currentStreak);
    }
}
`,
      },
      {
        subTitle: "Leetcode 41 (FAANG)",
        text: "abc",
        code: `class Solution {
    public int firstMissingPositive(int[] nums) {
        int n=1;
        Arrays.sort(nums);
        for(int i=0;i<nums.length;i++){
            if(nums[i]>=0){
                if(nums[i]==n){
                    n++;
                }
            }
        }
        return n;
    }
}
`,
      },
      {
        subTitle: "Sliding Window Leetcode questions below",
        text: "abc",
      },
      {
        subTitle: "Leetcode 121 (FAANG)",
        text: "abc",
        code: `//This is gemini logic not mine so need to study it
class Solution {
    public int maxProfit(int[] prices) {
        if (prices == null || prices.length == 0) return 0;

        int buyPrice = prices[0];
        int maxProfit = 0;

        for (int i = 1; i < prices.length; i++) {
            // 1. If current price is cheaper than our buyPrice, update buyPrice
            if (prices[i] < buyPrice) {
                buyPrice = prices[i];
            } 
            // 2. Otherwise, check if selling today gives us a better profit
            else {
                int currentProfit = prices[i] - buyPrice;
                if (currentProfit > maxProfit) {
                    maxProfit = currentProfit;
                }
            }
        }
        
        return maxProfit;
    }
}
`,
      },
      {
        subTitle: "Leetcode 567",
        text: "abc",
        code: `class Solution {
    public boolean checkInclusion(String s1, String s2) {
        // Will do later as IDK the data structure
    }
}
`,
      },
      {
        subTitle: "Leetcode 424 (FAANG)",
        text: "abc",
        code: `class Solution {
    public int characterReplacement(String s, int k) {
        // Will do later as IDK the data structure
    }
}
`,
      },
      {
        subTitle: "Leetcode 3",
        text: "abc",
        code: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Will do later as IDK the data structure
    }
}
`,
      },
      {
        subTitle: "Leetcode 239",
        text: "abc",
        code: `class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        // Will do later as IDK the data structure        
    }
}
`,
      },
      {
        subTitle: "Leetcode 76 (FAANG)",
        text: "abc",
        code: `class Solution {
    public String minWindow(String s, String t) {
        // Will do later as IDK the data structure                
    }
}
`,
      },
      {
        subTitle: "Leetcode 1",
        text: "abc",
        code: "abc",
      },
      {
        subTitle: "Leetcode 1",
        text: "abc",
        code: "abc",
      },
      {
        subTitle: "Leetcode 1",
        text: "abc",
        code: "abc",
      },
      {
        subTitle: "Leetcode 1",
        text: "abc",
        code: "abc",
      },
      {
        subTitle: "Leetcode 1",
        text: "abc",
        code: "abc",
      },
      {
        subTitle: "Leetcode 1",
        text: "abc",
        code: "abc",
      },
      {
        subTitle: "Leetcode 1",
        text: "abc",
        code: "abc",
      },
      {
        subTitle: "Leetcode 1",
        text: "abc",
        code: "abc",
      },
      {
        subTitle: "Leetcode 1",
        text: "abc",
        code: "abc",
      },
      {
        subTitle: "Leetcode 1",
        text: "abc",
        code: "abc",
      },
      {
        subTitle: "Leetcode 1",
        text: "abc",
        code: "abc",
      },
      {
        subTitle: "Leetcode 1",
        text: "abc",
        code: "abc",
      },
    ],
  },
  dt1: {
    id: "dt1",
    title: "Demo Topic 1",
    description:
      "This is a demonstration of the first subtopic in the new section.",
    blocks: [
      {
        subTitle: "Core Concept",
        text: "Brief explanation of what this demo topic covers.",
        list: ["Key feature one", "Important observation two"],
        code: "print('Demo 1 is active')",
        outputCode: "Demo 1 is active",
      },
    ],
  },
  dt2: {
    id: "dt2",
    title: "Demo Topic 2",
    description: "Second demonstration subtopic for testing layout and flow.",
    blocks: [
      {
        subTitle: "Advanced Logic",
        text: "Detailed description of the second demo topic.",
        code: "# Logic for demo 2\nresult = 10 * 10\nprint(result)",
        outputCode: "100",
      },
    ],
  },
};
