/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
    const cnt = { O: 0, X: 0 }
    for (const line of board) {
        for (const xo of line) {
            if (xo !== ' ') cnt[xo]++
        }
    }
    // 不符合两种情况
    if (cnt.O !== cnt.X && cnt.X - cnt.O !== 1) return false
    // 获取不会赢的字符
    const will_not_win = cnt.X > cnt.O ? 'O' : 'X'
    // 两对角线
    if (board[0][0] === will_not_win && board[0][0] === board[1][1] && board[0][0] === board[2][2]) return false
    if (board[0][2] === will_not_win && board[0][2] === board[1][1] && board[0][2] === board[2][0]) return false
    for (let i = 0; i < 3; i++) {
        // 三行
        if (board[i][0] === will_not_win && board[i][0] === board[i][1] && board[i][0] === board[i][2]) return false
        // 三列
        if (board[0][i] === will_not_win && board[0][i] === board[1][i] && board[0][i] === board[2][i]) return false
    }
    return true
}
