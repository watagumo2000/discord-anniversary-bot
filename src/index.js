const { Client, GatewayIntentBits } = require('discord.js');
// .envファイルの読み込み
require('dotenv').config();

// クライアントの作成（Botが必要とする権限の設定）
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,           // サーバー関連のイベント
        GatewayIntentBits.GuildMessages,    // メッセージの読み取り
        GatewayIntentBits.MessageContent    // メッセージの内容を取得する権限
    ]
});

// BotがDiscordに接続完了したときの処理
client.once('ready', () => {
    console.log(`✅ 準備完了！ ${client.user.tag} としてログインしたよ！`);
});

// 誰かがメッセージを送信したときの処理（テスト用）
client.on('messageCreate', (message) => {
    // Bot自身のメッセージには反応しないようにする
    if (message.author.bot) return;

    // 「!ping」と送られたら返信する
    if (message.content === '!ping') {
        message.reply('pong! コンテナの中から返信してるよ！🐳');
    }
});

// .envに書いたトークンを使ってDiscordにログイン
client.login(process.env.DISCORD_BOT_TOKEN);