from typing import List


# Solution class
class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        l, r = 0, len(letters) - 1

        # If the target is greater than or equal to the last element, return the first element
        if target >= letters[-1]:
            return letters[0]

        while l <= r:
            mid = (l + r) // 2
            if letters[mid] > target:
                r = mid - 1
            else:
                l = mid + 1

        return letters[l]


# Main block to run the code
if __name__ == "__main__":
    # Create an instance of the solution class
    solution = Solution()

    # Define test cases
    test_cases = [
        # (["c", "f", "j"], "a"),  # Expected output: "c"
        # (["c", "f", "j"], "c"),  # Expected output: "f"
        # (["x", "x", "y", "y"], "z"),  # Expected output: "x"
        (["c", "f", "j"], "d"),  # Expected output: "f"
        # (["a", "b", "c"], "c")  # Expected output: "a"
    ]

    # Run through each test case and print the result
    for letters, target in test_cases:
        result = solution.nextGreatestLetter(letters, target)
        print(f"letters: {letters}, target: '{target}' -> output: '{result}'")
