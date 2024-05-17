// 进入xyhelper后台,打开浏览器console输入以下命令执行
// 输入账号信息

const accounts =
    `
    aabb@gmail.com dhjkahdkjah
    bbaa@outlook.com dhjkahdkjah
    `

// 拆分每一行的分隔符默认\n
const rowSeparator = '\n';
// 拆分每一列的分隔符默认\n
// const colSeparator = '\t';
// 每个账号休息间隔时间默认5000毫秒;
const sleepTime = 10000;

function sleep(ms) {
    return new Promise(resolve => { setTimeout(resolve, ms) });
}


const handleInput = (inputElement, value) => {
    inputElement.value = value;
    inputElement.dispatchEvent(new Event('input', {
        bubbles: true,
        cancelable: true,
    }));
}



const batchInsertAccounts = async () => {
    // 拆分账号信息 , 去除只有空格的行
    const rows = accounts.split(rowSeparator).map(i => i.trim()).filter(i => i.length > 0);
    console.log('共' + rows.length + '个账号');
    for (let i = 0; i < rows.length; i++) {
        document.querySelector('.el-button.el-button--primary').click();
        await sleep(sleepTime);
        // 分割空格 可能是多个空格
        const cols = rows[i].split(/\s+/);
        if (cols.length !== 2) {
            console.error('第' + (i + 1) + '个账号格式错误');
            continue;
        } else {
            console.log('第' + (i + 1) + '个账号');
            const mail = cols[0];
            const password = cols[1];
            console.log('邮箱:' + mail + ' 密码:' + password);
            if (mail.includes('@') === false || mail.includes('.') === false) {
                console.error('第' + (i + 1) + '个账号格式错误');
                continue;
            }
            const emailInput = document.querySelector('[placeholder="请填写邮箱"]');
            const passwordInput = document.querySelector('[placeholder="请填写密码"]');
            handleInput(emailInput, mail);
            handleInput(passwordInput, password);
            document.querySelector('.el-button.el-button--success').click();
            await sleep(sleepTime);
            console.log('第' + (i + 1) + '个账号添加成功');
        }

    }
    console.log('所有账号添加成功');
}
batchInsertAccounts();
