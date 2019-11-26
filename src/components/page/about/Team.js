import React, { Component } from 'react';

// team member loop
const riseup_team_member_data = [
    {
        member_img: require('../../../assets/img/team/team-member-1.png'),
        member_alt: "team member image",
        member_name: "jannathan doe",
        member_designation: "developer",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        member_img: require('../../../assets/img/team/team-member-2.png'),
        member_alt: "team member image",
        member_name: "jannathan doe",
        member_designation: "developer",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        member_img: require('../../../assets/img/team/team-member-3.png'),
        member_alt: "team member image",
        member_name: "jannathan doe",
        member_designation: "developer",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        member_img: require('../../../assets/img/team/team-member-4.png'),
        member_alt: "team member image",
        member_name: "jannathan doe",
        member_designation: "developer",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        member_img: require('../../../assets/img/team/team-member-5.png'),
        member_alt: "team member image",
        member_name: "jannathan doe",
        member_designation: "developer",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        member_img: require('../../../assets/img/team/team-member-5.png'),
        member_alt: "team member image",
        member_name: "jannathan doe",
        member_designation: "developer",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        member_img: require('../../../assets/img/team/team-member-5.png'),
        member_alt: "team member image",
        member_name: "jannathan doe",
        member_designation: "developer",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        member_img: require('../../../assets/img/team/team-member-5.png'),
        member_alt: "team member image",
        member_name: "jannathan doe",
        member_designation: "developer",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    }
]

// get team member data
const get_member_data = riseup_team_member_data.map((single_member,i) => {
    const get_socal_all_data = single_member.social_media.map((single_social, i) => {
        return (
            <li key={i}>
                 <a rel="noopener noreferrer" href={single_social} target="_blank"><i className={single_social.social_icon}></i></a>
            </li>
        )
    });
   return(
<div className="col-lg-3 col-md-4 col-sm-6" key={i}>
    <div className="team-item">
        <div className="team-member">
            <figure className="team-member-img">
                <a rel="noopener noreferrer" href="/">
                    <img src={single_member.member_img} alt={single_member.member_alt} />
                </a>
            </figure>
            <div className="team-member-meta">
                <ul className="list-unstyled team-social-links">
                   {get_socal_all_data}
                </ul>
            </div>
        </div>
        <div className="team-info">
            <h3><a rel="noopener noreferrer" href="/">{single_member.member_name}</a></h3>
            <p>{single_member.member_designation}</p>
        </div>
    </div>
</div>

   )
})


class Team extends Component {

    render() {
        return (
            <div className="row">
                {get_member_data}
            </div>
        );
    }
}

export default Team;