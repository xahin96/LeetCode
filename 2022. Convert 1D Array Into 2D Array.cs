public class Solution {
    public int[][] Construct2DArray(int[] original, int m, int n) {
        if (original.Length != m * n)
        {
            return new int[0][];
        }

        int[][] twoDArr = new int[m][];
        for (int i = 0; i < m; i++)
        {
            twoDArr[i] = new int[n];
            for (int j = 0; j < n; j++)
            {
                twoDArr[i][j] = original[i * n + j];
            }
        }
        return twoDArr;
    }
}
