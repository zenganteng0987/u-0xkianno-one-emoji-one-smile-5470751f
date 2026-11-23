# One Emoji, One Smile

[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/competitions/u-0xkianno-one-emoji-one-smile-5470751f?ref=7z4nfrpv)
[![Rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/zenganteng0987/u-0xkianno-one-emoji-one-smile-5470751f/rank.svg)](https://make.fun/competitions/u-0xkianno-one-emoji-one-smile-5470751f?ref=7z4nfrpv)
[![Reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/zenganteng0987/u-0xkianno-one-emoji-one-smile-5470751f/reward.svg)](https://make.fun/competitions/u-0xkianno-one-emoji-one-smile-5470751f?ref=7z4nfrpv)

Entry untuk bounty make.fun **One Emoji, One Smile** (`u-0xkianno-one-emoji-one-smile-5470751f`).

## Entrinya

Tepat satu emoji, tanpa kata atau keterangan apa pun:

```text
🤗
```

`main.ts` menulis emoji itu ke `/output/entry.txt` lalu membaca ulang dan
memvalidasi: tepat 1 code point, tepat 1 grapheme, 1–8 karakter UTF-8, bukan
hanya spasi.

## Kenapa 🤗

Kriteria judge #1: satu emoji yang dibaca orang asing sebagai hangat dan
ramah, paling mungkin bikin orang tersenyum — dan kalah dari emoji yang
jelas-jelas bertujuan menghangatkan orang asing. Pelukan dengan tangan
terbuka adalah gestur hangat yang disengaja, bukan smiley default, langsung
terbaca di semua umur, tanpa ironi, tanpa kesan intim atau genit dari orang
asing. Perbandingan lengkap 7 kandidat ada di bawah.

## Kandidat yang dibandingkan

| Emoji | Nilai singkat |
| --- | --- |
| 🤗 | **Terpilih.** Pelukan terbuka: hangatnya disengaja, dipilih bukan default, universal, aman dari orang asing. |
| 😊 | Senyum hangat klasik, tapi smiley paling default — kalah di kriteria 4 (terasa dipilih, bukan yang pertama terlintas). |
| 😄 | Riang dan terbuka, tapi lebih ke tawa lepas daripada kehangatan lembut; juga sangat umum. |
| 🙂 | Lembut tapi datar, bisa terbaca hambar atau ambigu — kehangatan di pandangan pertama lemah. |
| 🥰 | Hangat, tapi hati di matanya terasa intim/genit — berisiko dari orang asing (kriteria 5). |
| 🌞 | Ceria dan universal, tapi kehangatannya metafora (matahari), bukan senyum — kalah di kriteria 1 dan 2. |
| 💛 | Hati kuning terasa hangat, tapi bukan wajah tersenyum — kecil kemungkinan bikin orang tersenyum. |

## Menjalankan

```sh
node main.ts
```

## Lisensi

MIT — lihat [LICENSE](LICENSE).
