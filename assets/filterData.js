const categories = [
    { label: "Programming", value: "Programming" },
    { label: "Misc", value: "Miscellaneous" },
    { label: "Dark", value: "Dark" },
    { label: "Pun", value: "Pun" },
    { label: "Spooky", value: "Spooky" },
    { label: "Christmas", value: "Christmas" },
]

const blacklist = [
    { label: "nsfw", value: "nsfw" },
    { label: "religious", value: "religious" },
    { label: "political", value: "political" },
    { label: "racist", value: "racist" },
    { label: "sexist", value: "sexist" },
    { label: "explicit", value: "explicit" },
]

// const language = [
//     { label: "English", value: "en" },
//     { label: "French", value: "fr" },
//     { label: "German", value: "de" },
//     { label: "Czech", value: "cs" },
//     { label: "Spanish", value: "es" },
//     { label: "Portuguese", value: "pt" },
// ]

// The Joke API does not have the same number of jokes across all languages.
// So we will use the default (English) language which contains around 300+ jokes at the time of writing this.

export { categories, blacklist }