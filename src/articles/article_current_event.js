const articlesCurrentEvent = [
    {
        className: "project-top-banner", 
        suptitle: {
            en: "WWS Haato Project 3", 
            jp: "WWS Haato サードプロジェクト、始動"
        }, 
        title: {
            en: "Haachama's diary", 
            jp: "はあちゃま日記"
        }, 
        passage: [
            {
                title: {
                    en: "Haachama Birthday Project 2022", 
                    jp: "はあちゃま誕生日プロジェクト 2022"
                },
                lines: [
                    {
                        en: "Visual Novel", 
                        jp: "ビジュアルノベルゲーム"
                    },
                    {
                        en: "Recruiting participants", 
                        jp: "参加者募集中"
                    },
                    {
                        en: "Join us for her best brithday gift!", 
                        jp: "一緒に最高の誕生日プレゼントを作りましょう！"
                    }
                ]
            }
        ]
        
    }, 
    {
        className: "project-details", 
        suptitle: {
            en: "Description", 
            jp: "はじめに"
        }, 
        contents: [
            [
                {
                    title: {
                        en: "Overview", 
                        jp: "はじめに"
                    },
                    // graphicID=0 or simply omit: no graphic request for this cell
                    graphicID: "vn",
                    passage: {
                        lines: [
                            {
                                en: "As Haachama is strong enough to face the difficulties in \
                                    the future, we would like to present a visual novel for our strongest \
                                    idol Haachama as a birthday gift in 2022!", 
                                jp: "活動しています。今年のはあちゃまはより強くなっていて、\
                                    これからどんな困難でも乗り越えられると思っています。\
                                    そんな風に最強アイドルに相応しい、\
                                    ビジュアルノベル＝ノベルゲーム）を2022の誕プレとして贈りたいと思います。"
                            },
                           
                            {
                                en: "We're looking for particapants to complete \
                                    the project together! Your contribution is always welcome!", 
                                jp: "現在、多くの分野から参加者を募集しています。\
                                    物語を充実させるライター、ゲーム根幹のプログラミング、\
                                    絵師、音楽制作の人とβテスターなどを探しています！ 先輩達の協力を、心よりお待ちしております。"
                            }
                        ]
                    }
                }, 
                {
                    title: {
                        en: "About the game", 
                        jp: "ゲーム概要"
                    },
                    // graphicID=0 or simply omit: no graphic request for this cell
                    // graphicID>0: requesting graphic
                    graphicID: "secret-note", 
                    graphicPassage: [
                        {
                            en: "[1/3] Want to know the secret of an idol’s daily life? ", 
                            jp: ""
                        }, 
                        {
                            en: "[2/3] You’re invited to Haachama world!", 
                            jp: ""
                        }, 
                        {
                            en: ">>> [3/3] Become HAACHAMA NOW <<< 　 ", 
                            jp: "", 
                            style: {fontWeight: "bold"}
                        }
                    ], 
                    passage: {
                        lines: [
                            {
                                en: "Your curiosity forced you to touch the mysteries of Haachama's world, \
                                    and the story begins...  ", 
                                jp: ""
                            }, 
                            {
                                en: " What will you do when you're Haachama? ", 
                                jp: "", 
                                style: {fontWeight: "bold"}
                            }, 
                            {
                                en: "Can you overcome the challenges and troubles, making your \
                                    2022 birthday live successful and enjoying your life as well? ",  
                                jp: ""
                            }, 
                            {
                                en: "Now it's time to CHANGE the world! ", 
                                jp: ""
                            }
                        ]
                    }
                }
            ], 
            [
                {
                    title: {
                        en: "Participation", 
                        jp: ""
                    },
                    // graphicID=0 or simply omit: no graphic request for this cell
                    graphicID: "discord",
                    passage: {
                        lines: [
                            {
                                en: "We are looking for writing, programmars, \
                                    and artists! \
                                    If you have interests, please checkout following sections! ", 
                                jp: ""
                            },
                            {
                                en: "Please note that it is requird for all participants to join our Discord server", 
                                jp: "", 
                                style: {fontWeight: "bold"}
                            }
                        ]
                    }
                }, 
            ]
        ]
    },
    {
        className: "project-details", 
        suptitle: {
            en: "Programming", 
            jp: "はじめに"
        }, 
        contents: [
            [
                {
                    title: {
                        en: "Programmers", 
                        jp: ""
                    },
                    // graphicID=0 or simply omit: no graphic request for this cell
                    graphicID: "programmer",
                    passage: {
                        lines: [
                            {
                                en: "We’re planning to produce this game with Python, probably building with Pygame", 
                                jp: ""
                            },
                            {
                                en: "Also, we’ll set the project on Github, using Git for version control. \
                                    Programmers need to check the documents frequently to keep up-to-date.",
                                jp: ""

                            }, 
                            {
                                en: "Providing suggestions on code, frameworks, and game systems is also highly appreciated.", 
                                jp: ""
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
            en: "Writers", 
            jp: "jp"
        }, 
        contents: [
            [
                {
                    title: {
                        en: "Screen Writers", 
                        jp: ""
                    },
                    // graphicID=0 or simply omit: no graphic request for this cell
                    graphicID: "screen-writer",
                    passage: {
                        lines: [
                            {
                                en: "Screenwriters need to provide ideas and create new scenarios, \
                                writing outlines for writers. ", 
                                jp: ""
                            },
                            {
                                en: "This part of work will need to take more effort than \
                                others in the early phase of our project.",
                                jp: "", 
                                style: {fontWeight: "bold"}

                            }
                        ]
                    }
                }, 
                {
                    title: {
                        en: "Writers", 
                        jp: ""
                    },
                    // graphicID=0 or simply omit: no graphic request for this cell
                    graphicID: "writer",
                    passage: {
                        lines: [
                            {
                                en: "Writers need to complete the text for the scenarios, \
                                making them interesting and reasonable", 
                                jp: ""
                            }
                        ]
                    }
                }
            ], 
            [
                {
                    title: {
                        en: "Editors", 
                        jp: ""
                    },
                    // graphicID=0 or simply omit: no graphic request for this cell
                    graphicID: "editor",
                    passage: {
                        lines: [
                            {
                                en: "Editors will need to find out any typos, \
                                conflicting content and correct the grammar before handing texts to translators.", 
                                jp: ""
                            }
                        ]
                    }
                }, 
                {
                    title: {
                        en: "Translators", 
                        jp: ""
                    },
                    // graphicID=0 or simply omit: no graphic request for this cell
                    // graphicID>0: requesting graphic
                    graphicID: "translator", 
                    passage: {
                        lines: [
                            {
                                en: "Translators are expected to translate information between JP <-> EN members \
                                at any time if the other groups need translation, and finished scripts (texts) to other languages. ", 
                                jp: ""
                            }, 
                            {
                                en: " You’ll have a lot of loads even later than editors.", 
                                jp: "", 
                                style: {fontWeight: "bold"}
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
            en: "Artists", 
            jp: "jp"
        }, 
        contents: [
            [
                {
                    title: {
                        en: "Illustrators", 
                        jp: ""
                    },
                    // graphicID=0 or simply omit: no graphic request for this cell
                    graphicID: "illustrator",
                    passage: {
                        lines: [
                            {
                                en: "We’ll mainly collect character CG under certain rules to ensure the \
                                art styles are kept in the same way. ",
                                jp: ""
                            }, 
                            {
                                en: "Some full illustrations with a certain theme are welcome as well, \
                                please check the storyboard updates."
                            }
                        ]
                    }
                }, 
                {
                    title: {
                        en: "Musicians", 
                        jp: ""
                    },
                    // graphicID=0 or simply omit: no graphic request for this cell
                    graphicID: "musician",
                    passage: {
                        lines: [
                            {
                                en: "We are planning to use free BGM mainly but any submission of BGM is appreciated. ",
                                jp: ""
                            }, 
                            {
                                en: "In addition to BGMs, \
                                    we also would like to make an opening theme song for this game. ", 
                                jp: ""
                            }, 
                            {
                                en: "It would be great if we can make an ending song.", 
                                jp:""
                            }
                        ]
                    }
                }
            ], 
            [
                {
                    title: {
                        en: "Animators", 
                        jp: ""
                    },
                    // graphicID=0 or simply omit: no graphic request for this cell
                    graphicID: "animator",
                    passage: {
                        lines: [
                            {
                                en: "For those visual novels, \
                                we can use CGs in the game to make simple animations \
                                if we have less power on this part. ", 
                                jp: ""
                            }, 
                            {
                                en: "Submission of a short 3D scene matching the song is welcome \
                                if that doesn’t gonna kill you.", 
                                jp:""
                            }
                        ]
                    }
                }
            ]
        ]
    }
];


export default articlesCurrentEvent;