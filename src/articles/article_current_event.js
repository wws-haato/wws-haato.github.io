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
                    // graphicID>0: requesting graphic
                    passage: {
                        lines: [
                            {
                                en: "Haachamachama! We are team WWS Haato, dedicated to fan-based \
                                    projects for Haato which gathering fans all over the world! ", 
                                jp: "はあちゃまっちゃま～私たちはWWS Haatoチーム、世界中の \
                                    ファンを集めてはあちゃま関連のファンプロジェクトを中心として"
                            },
                            {
                                en: "This year, as Haachama is strong enough to face the difficulties in \
                                    the future, we would like to present a visual novel for our strongest \
                                    idol Haachama as a birthday gift in 2022!", 
                                jp: "活動しています。今年のはあちゃまはより強くなっていて、\
                                    これからどんな困難でも乗り越えられると思っています。\
                                    そんな風に最強アイドルに相応しい、\
                                    ビジュアルノベル＝ノベルゲーム）を2022の誕プレとして贈りたいと思います。"
                            },
                           
                            {
                                en: "We're going to recruit particapants from different field, including \
                                    storywriting, programmars, illustrators, musicians and testers! \
                                    Your contribution is always welcome!", 
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
            ]
        ]
    },
    {
        className: "project-details", 
        suptitle: {
            en: "About the game", 
            jp: "ゲーム概要"
        }, 
        contents: [
            [
                {
                    /*title: {
                        en: "Watch on Youtube", 
                        jp: "[JP] Watch on Youtube"
                    },
                    */ 
                    graphicID: 0, 
                    // graphicID=0 or simply omit: no graphic request for this cell
                    // graphicID>0: requesting graphic
                    passage: {
                        
                    }
                }
            ]
        ]
    } 
];
export default articlesCurrentEvent;