import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import { IPostProps } from "../shared/Post";


// interface IPostsData {
//   resp?: {
//     data: {
//       data: {
//         children: IPostProps[]
//       },
//     }
//   }
// }

type IPostsData = IPostProps[];

export function usePosts() {
    const token = useContext(tokenContext)
    const [Posts, setPosts] = useState<IPostsData>([]);
    useEffect(() => {
        axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
            headers: { Authorization: `bearer ${token}` }
        }).then((resp) => {
            setPosts( resp.data.data.children.map((c:any) => c.data))
        })
            .catch(console.log);
    }, [token]);
    return [Posts];
}

// resp: {
//     config: { transitional: {… }, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, … }
//     data:
//     data:
//     after: "t3_x4gcx3"
//     before: null
//     children: Array(25)
//     0:
//     data:
//     all_awardings: [{… }]
//     allow_live_comments: true
//     approved_at_utc: null
//     approved_by: null
//     archived: false
//     author: "nikan69"
//     author_flair_background_color: null
//     author_flair_css_class: null
//     author_flair_richtext: []
//     author_flair_template_id: null
//     author_flair_text: null
//     author_flair_text_color: null
//     author_flair_type: "text"
//     author_fullname: "t2_697ljx3d"
//     author_is_blocked: false
//     author_patreon_flair: false
//     author_premium: false
//     awarders: []
//     banned_at_utc: null
//     banned_by: null
//     can_gild: true
//     can_mod_post: false
//     category: null
//     clicked: false
//     content_categories: null
//     contest_mode: false
//     created: 1662139559
//     created_utc: 1662139559
//     discussion_type: null
//     distinguished: null
//     domain: "psypost.org"
//     downs: 0
//     edited: false
//     gilded: 0
//     gildings: { }
//     hidden: false
//     hide_score: false
//     id: "x47b5x"
//     is_created_from_ads_ui: false
//     is_crosspostable: true
//     is_meta: false
//     is_original_content: false
//     is_reddit_media_domain: false
//     is_robot_indexable: true
//     is_self: false
//     is_video: false
//     likes: null
//     link_flair_background_color: "#e4e481"
//     link_flair_css_class: "psych"
//     link_flair_richtext: []
//     link_flair_template_id: "1745eca2-6806-11e5-b03e-122ab0778f8b"
//     link_flair_text: "Psychology"
//     link_flair_text_color: "dark"
//     link_flair_type: "text"
//     locked: false
//     media: null
//     media_embed: { }
//     media_only: false
//     mod_note: null
//     mod_reason_by: null
//     mod_reason_title: null
//     mod_reports: []
//     name: "t3_x47b5x"
//     no_follow: false
//     num_comments: 556
//     num_crossposts: 1
//     num_reports: null
//     over_18: false
//     parent_whitelist_status: "all_ads"
//     permalink: "/r/science/comments/x47b5x/people_who_are_slower_to_respond_to_questions_are/"
//     pinned: false
//     post_hint: "link"
//     preview: { images: Array(1), enabled: false }
//     pwls: 6
//     quarantine: false
//     removal_reason: null
//     removed_by: null
//     removed_by_category: null
//     report_reasons: null
//     saved: false
//     score: 11618
//     secure_media: null
//     secure_media_embed: { }
//     selftext: ""
//     selftext_html: null
//     send_replies: false
//     spoiler: false
//     sr_detail: {

//         accept_followers: true
//         allow_chat_post_creation: false
//         allowed_media_in_comments: []
//         banner_img: "https://b.thumbs.redditmedia.com/sYv4koCb1JLSVdCbJrXllwSJ33JqRgr2gfemgUoZsDc.png"
//         banner_size: (2)[1280, 384]
//         community_icon: "https://styles.redditmedia.com/t5_mouw/styles/communityIcon_xtjipkhhefi41.png?width=256&amp;s=23dbd8fcbd7c632995ddc63929abe0c2ce3b8b4d"
//         created: 1161179666
//         created_utc: 1161179666
//         default_set: true
//         description: "# [Submission Rules](https://www.reddit.com/r/science/wiki/rules#wiki_submission_rules)\n\n1. Directly link to published peer-reviewed research or media summary\n2. No summaries of summaries, re-hosted press releases, or reposts\n3. No editorialized, sensationalized, or biased titles\n4. Research must be less than 6 months old\n5. No blogspam, images, videos, or infographics\n6. All submissions must have flair assigned\n\n# [Comment Rules](https://www.reddit.com/r/science/wiki/rules#wiki_comment_rules)\n\n1. No off-topic comments, memes, low-effort comments or jokes\n2. No abusive or offensive comments\n3. Non-professional personal anecdotes will be removed\n4. Criticism of published work should assume basic competence of the researchers and reviewers\n5. Comments dismissing established findings and fields of science must provide evidence\n6. No medical advice\n7. Repeat or flagrant offenders will be banned\n\n---\n\n\n\n## [New to reddit? Click here!](https://www.reddit.com/wiki/reddit_101)\n\n## [Get flair in /r/science](https://www.reddit.com/r/science/wiki/flair)\n\n## [Previous Science AMA's](https://www.reddit.com/r/science/search?q=flair%3A%27AMA%27&amp;sort=new&amp;restrict_sr=on)\n\n&gt; \n- **filter by field**\n- [Animal Sci.](https://goo.gl/STb58P)\n- [Anthropology](https://goo.gl/janxGX)\n- [Astronomy](https://goo.gl/dTqMXH)\n- [Biology](https://goo.gl/m4QZbs)\n- [Cancer](https://goo.gl/rjLfaK)\n- [Chemistry](https://goo.gl/Jjxj3P)\n- [Computer Sci.](https://goo.gl/Xpvh6i)\n- [Engineering](https://goo.gl/iFi3Gu)\n- [Environment](https://goo.gl/oedACs)\n- [Epidemiology](https://goo.gl/VmmsA9)\n- [Geology](https://goo.gl/J4xdyq)\n- [Health](https://goo.gl/kWcS6m)\n- [Mathematics](https://goo.gl/8SMPsP)\n- [Medicine](https://goo.gl/kyPRCD)\n- [Nanoscience](https://goo.gl/UmxqQd)\n- [Neuroscience](https://goo.gl/AphkXU)\n- [Paleontology](https://goo.gl/iMgZoU)\n- [Physics](https://goo.gl/1ZrRAu)\n- [Psychology](https://goo.gl/J2vKF1)\n- [Social Sci.](https://goo.gl/CftfVE)\n- [Sci Discussion](https://goo.gl/dGn6F8)\n\n---\n\n[](#/RES_SR_Config/NightModeCompatible)"
//         disable_contributor_requests: true
//         display_name: "science"
//         display_name_prefixed: "r/science"
//         free_form_reports: false
//         header_img: "https://b.thumbs.redditmedia.com/qzIP8EKeRG_kef7dVYI5ojcPj_V9kk5xyByof-Fe0eE.png"
//         header_size: (2)[28, 24]
//         icon_color: ""
//         icon_img: "https://b.thumbs.redditmedia.com/pkTkSME-lKZcgYyhnOLC5Byj_5SgU5G4B4u1td1F-4Y.png"
//         icon_size: (2)[256, 256]
//         is_chat_post_feature_enabled: true
//         key_color: "#ff4500"
//         link_flair_enabled: true
//         link_flair_position: "left"
//         name: "t5_mouw"
//         over_18: false
//         previous_names: []
//         primary_color: "#373c3f"
//         public_description: "This community is a place to share and discuss new scientific research. Read about the latest advances in astronomy, biology, medicine, physics, social science, and more. Find and submit new publications and popular science coverage of current research."
//         quarantine: false
//         restrict_commenting: false
//         restrict_posting: true
//         show_media: true
//         submit_link_label: ""
//         submit_text_label: ""
//         subreddit_type: "public"
//         subscribers: 28137663
//         title: "Reddit Science"
//         url: "/r/science/"
//         user_is_banned: false
//         user_is_contributor: false
//         user_is_moderator: false
//         user_is_muted: null
//         user_is_subscriber: true
//     }
//     stickied: false
//     subreddit: "science"
//     subreddit_id: "t5_mouw"
//     subreddit_name_prefixed: "r/science"
//     subreddit_subscribers: 28137663
//     subreddit_type: "public"
//     suggested_sort: "confidence"
//     thumbnail_height: 70
//     thumbnail_width: 140
//     title: "People who are slower to respond to questions are perceived as more introverted, study finds"
//     total_awards_received: 1
//     ups: 11618
//     upvote_ratio: 0.94
//     url: "https://www.psypost.org/2022/09/people-who-are-slower-to-respond-to-questions-are-perceived-as-more-introverted-study-finds-63838"
// }
