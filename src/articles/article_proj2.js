const articlesProject2 = [
    {
        className: "project-top-banner", 
        suptitle: {
            en: "WWS Haato Project 2", 
            jp: "WWS Haato セカンドプロジェクト"
        }, 
        title: {
            en: "Haato's Birthday Parade ❤", 
            jp: "はあとのバースデーパレード ❤"
        }, 
        passage: [
            {
                title: {
                    en: "Haachama Birthday Project 2021", 
                    jp: "はあちゃま誕生日プロジェクト2021"
                },
                lines: [
                    {
                        en: "Original Song", 
                        jp: "オリジナル曲"
                    },
                    {
                        en: "Original MV", 
                        jp: "オリジナルMV"
                    },
                    {
                        en: "Over 100 Singing Haatons", 
                        jp: "100人以上のはあとんが合唱"
                    }
                ]
            }
        ]
        
    }, 
    {
        className: "project-details", 
        suptitle: {
            en: "Video", 
            jp: "動画"
        }, 
        contents: [
            [
                {
                    title: {
                        en: "Watch on Youtube", 
                        jp: "Youtubeで見る"
                    }, 
                    graphicID: 1, 
                    // graphicID=0 or simply omit: no graphic request for this cell
                    // graphicID>0: requesting graphic
                    passage: {
                        lines: [
                            {
                                en: "Happy birthday to our lovely Haato", 
                                jp: "愛おしいはあと様、お誕生日おめでとう"
                            }, 
                            {
                                en: "Here's a gift with our blessing for you", 
                                jp: "私達が祝福を込めた贈り物ですよ"
                            }
                        ]
                    }
                }
            ]
        ]
    }, 
    {
        className: "project-details", 
        suptitle: {
            en: "Originality", 
            jp: "jp"
        }, 
        contents: [
            [
                {
                    title: {
                        en: "100% Fan-made", 
                        jp: ""
                    }, 
                    graphicID: "org", 
                    passage: {
                        lines: [
                            {
                                en: "For this project we created an original birthday song and music video for Haachama. ", 
                                jp: ""
                            }, 
                            {
                                en: "Everything was self produced with the help of many Haatons.", 
                                jp: "", 
                                style:{fontWeight: "bold"}
                            },
                            {
                                en: " In particular, it includes \
                                original lyrics, melodies, animations and 2 lead singers with 100 back singers", 
                                jp: ""
                            }/*
                            {
                                en: " - original melody played by Haatons on real instruments", 
                                jp: ""
                            }, 
                            {
                                en: " - custom made illustrations by Haatons", 
                                jp: ""
                            }, 
                            {
                                en: " - selfmade animations to form a MV", 
                                jp: ""
                            }, 
                            {
                                en: "- 2 lead singers and over 100 background singers", 
                                jp: ""
                            }*/
                        ]
                    }
                }
            ]
        ]
    }, 
    {
        className: "project-details", 
        suptitle: {
            en: "Meaning of Lyrics", 
            jp: "jp"
        }, 
        contents: [
            [
                {
                    title: {
                        en: "Verse1(?)", 
                        jp: ""
                    }, 
                    graphicID: "beast", 
                    passage: {
                        lines: [
                            {
                                en: "The lyrics are reflecting the past year of Haachama. ", 
                                jp: ""
                            },
                            {
                                en: "At the beginning, she arrives back in Japan after ending her studies overseas. ", 
                                jp: ""
                            },
                            {
                                en: "She remembers all the things that happened and is thankful \
                                    for everyone who stands by her side. ", 
                                jp: ""
                            }
                        ]
                    }
                }, 
                {
                    title: {
                        en: "Verse2(?)", 
                        jp: ""
                    }, 
                    graphicID: "zorga", 
                    passage: {
                        lines: [
                            {
                                en: "Haachama thinks back to the start of her VTuber career. ", 
                                jp: ""
                            }, 
                            {
                                en: "Back when she discovered an entire new world \
                                    and had a dream to make it to the very top. ", 
                                jp: ""
                            }, 
                            {
                                en: "In between Haatons sing for Haachama, \
                                expressing their love and support.", 
                                jp: ""
                            }
                        ]
                    }
                }
            ], 
            [
                {
                    title: {
                        en: "Bridge", 
                        jp: ""
                    }, 
                    graphicID: "pineapple", 
                    passage: {
                        lines: [
                            {
                                en: "Near the end, when the duet between the two lead singers starts, \
                                the lyrics are referencing the Haato x Haachama lore arc, \
                                which had a huge impact on Haachamas content in 2021.", 
                                jp: ""
                            }, 
                            {
                                en: " In the final section, after finding peace with herself, \
                                    Haachama is picking up the lines from Haatons and sings with them together. ", 
                                jp: ""
                            }
                        ]
                    }
                }
            ]
        ]
    }
];

export default articlesProject2;