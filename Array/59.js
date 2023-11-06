// 螺旋矩阵
function calcFunc(n) {
    const results = new Array(n);
    for (let i = 0; i < n; i++) {
        results[i] = new Array(n).fill(0);
    }
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;
    let begin = 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            results[top][i] = begin;
            begin++;
        }
        for (let i = top + 1; i <= bottom; i++) {
            results[i][right] = begin;
            begin++;
        }

        if (top !== bottom) {
            for (let i = right - 1; i >= left; i--) {
                results[bottom][i] = begin;
                begin++;
            }
        }
        if (left !== right) {
            for (let i = bottom - 1; i > top; i--) {
                results[i][left] = begin;
                begin++;
            }
        }

        left++; right--; top++; bottom--;
    }

    console.log(results);
    return results;
}

