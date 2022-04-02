const articlesNews = [
    {
        /**
         * please type ONLY numbers here, instead of abbreviations(Mar. 4th, etc)
         * numbers are required for the code to sort out all news in descending date order
         * that being said, you can actually list the news int random order for your convenience
         * it will later be converted into month abbriviations in the code
         */
        date: {year: 2021, month: 4, day: 11}, 
        title: {
            en: "Final video of World Wide Tour Guide has been released.", 
            /**
             * add ' \' (space+\) at the end of a string , 
             * if it's is too long that a new line is needed (see the jp: bellow as ref) 
             * please note that the ' \' is only for code review, 
             * the strings will still be in a single line on the actual site
             * be sure to enclose the entire string by "". 
             */
            jp: "ワールドワイドツアーガイドの \
                最終ビデオが公開されました。"
        }, 
        graphic: {
            /**
             * only 2 tyes are available, either "youtube" or "picture"
             */
            type: "youtube", 
            /**if declaring "youtube", paste the link to path: 
             * if declaring "picture", 
             * place the picture under the folder "public/fig/news" 
             * and paste the filename of the picture here 
             */
            path: "https://youtu.be/LLuqBMnfKJY"
        }, 
        passage: [
            /**
             * in passage scope, arbitrary number (at least 1) of lines can be inserted
             * beware that each of the lines have to be enclosed by {}
             * and has to include both en: and jp:, or at least placeholding texts
             */
            {
                /**
                 * this is the scope of a single line
                 * same format as described in title scope(line 7 of the entire sheet)
                 */
                en: "The project is finally finished, \
                    please check the final product", 
                jp: "[JP]The project is finally finished, please check the final product"
            }, // <------ each of the lines has to be seperated by a comma
            {
                en: "We deeply appreciate all participants! See you next project!!", 
                jp: "[JP]We deeply appreciate all participants! See you next project!!"
            }  // <------ except for the last line, a comma is not needed
        ]
    }, // <------ seperate news with commas liek this. similarly, no comma for the last news

    {
        date: {year: 2021, month: 6, day: 12}, 
        title: {
            en: "New project Grand Birthday Chorus has been initiated!", 
            jp: "ワールドワイドツアーガイドの \
                最終ビデオが公開されました。"
        }, 
        graphic: {
            type: "youtube", 
            path: "https://youtu.be/Y0Pz0AQ6mOQ"
        }, 
        passage: [
            {
                en: "Note: the project has been completed, \
                    please visit Previous Works page to see the final production!", 
                jp: "[JP]Note: the project has been completed, \
                    please visit Previous Works page to see the final production!", 
            }, 
            {
                en: "We are team WWS Haato, \
                    focusing on Haato projects gathering fans all over the world!", 
                jp: "はあちゃまっちゃま～私達はWWSはあとチームです！世界中のファンを集めて、\
                    赤井はあと関連のファンプロジェクトを中心にして活動しております。"
            }, 
            {
                en: "We are going to make a Music Video (MV) with an original birthday song, \
                    so participants can join us in two different ways, \
                    providing singing voice files and MV materials.", 
                jp: "私達は今、誕生日のオリジナル曲とMV作ることになりました。\
                    企画を参加したい人は二通りあります：歌声の投稿、もしくはMV製作の素材で応募できます。"
            },
            {
                en: "You can participate in both parts of the project!", 
                jp: "もちろん、両方とも企画に参加するのも大歓迎です！"
            }
        ]
    }, 
    {
        date: {year: 2021, month: 6, day: 23}, 
        title: {
            en: "Song preview for Grand Birthday Chorus has been released!", 
            jp: "グランドバースデーコーラスの曲プレビューが公開されました！"
        }, 
        graphic: {
            type: "youtube", 
            path: "https://youtu.be/EzELsQyLP2s"
        }, 
        passage: [
            {
                en: "The project is finally finished, \
                    please check the final video, hope you enjoy!", 
                jp: "The project is finally finished, \
                    please check the final video, hope you enjoy!", 
            }
        ]
    }, 
    {
        date: {year: 2021, month: 8, day: 10}, 
        title: {
            en: "Final video release of Haato's Birthday Parade ❤! ", 
            jp: "[JP]Final video release of Haato's Birthday Parade ❤！"
        }, 
        graphic: {
            type: "youtube", 
            path: "https://youtu.be/aHt-fGy5BYQ"
        }, 
        passage: [
            {
                en: "The project is finally finished, \
                    please check the final video, hope you enjoy!", 
                jp: "The project is finally finished, \
                    please check the final video, hope you enjoy!", 
            }
        ]
    }, 
    {
        date: {year: 2022, month: 4, day: 3}, 
        title: {
            en: "New project Haachama's initiated!", 
            jp: "[JP]Final video release of Haato's Birthday Parade ❤！"
        }, 
        graphic: {
            type: "picture", 
            path: "fig/common/place_holder.png"
        }, 
        passage: [
            {
                en: "The project is finally finished, \
                    please check the final video, hope you enjoy!", 
                jp: "The project is finally finished, \
                    please check the final video, hope you enjoy!", 
            }
        ]
    }
    
]


export default articlesNews;
