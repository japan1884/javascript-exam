let i;
for (i = 0; i < 50; i++) {
    if (i != 0 && i % 10 == 0) {
        console.log("今"+ i + "回ループしました。");
    }
    if (i != 0 && i % 4 == 0) {
        console.log("４で割れる数です。" + i);
    }
}
alert(i + "回カウントが終わりました。");
