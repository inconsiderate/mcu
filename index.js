$( document ).ready(function() {


    var current = $("#currentTemplate").html();
    var currentTemplate = Handlebars.compile(current);
    var upcoming = $("#upcomingTemplate").html();
    var upcomingTemplate = Handlebars.compile(upcoming);

    var currentData = {current: [
        {
            title: "Agent Carter - Season 2 Premiere",
            date: 'January 19th, 2016',
            description: "Dedicated to the fight against new atomic age threats in the wake of World War II, Peggy must now journey from New York City to Los Angeles for her most dangerous assignment yet.",
            logo: 'public/icons/shield.png',
            banner: 'public/banners/agentcarterS02.png',
            trailer: 'https://www.youtube.com/watch?v=j7jlEes2q7U',
            trakt: 'http://trakt.tv/shows/marvel-s-agent-carter/seasons/2'
        },
        {
            title: "Agents of Shield - Season 3 Return",
            date: 'March 8th, 2016',
            description: "Agent Phil Coulson of S.H.I.E.L.D. (Strategic Homeland Intervention, Enforcement and Logistics Division) puts together a team of agents to investigate the new, the strange and the unknown around the globe, protecting the ordinary from the extraordinary.",
            logo: 'public/icons/shield.png',
            banner: 'public/banners/shieldS03.jpg',
            trakt: 'http://trakt.tv/shows/marvel-s-agents-of-s-h-i-e-l-d/seasons/3'
        },
        {   title: "Daredevil - Season 2 Premiere",
            date: 'Marth 25, 2016',
            description: "Matt Murdock was blinded in a tragic accident as a boy, but imbued with extraordinary senses. Murdock sets up practice in his old neighborhood of Hell's Kitchen, New York, where he now fights against injustice as a respected lawyer by day and as the masked vigilante Daredevil by night.",
            logo: 'public/icons/daredevil.png',
            banner: 'public/banners/daredevils02.jpg',
            trakt: 'http://trakt.tv/shows/marvel-s-daredevil/seasons/2'
        },
        {   title: "Captain America - Civil War",
            date: 'May 6th, 2016',
            description: "Political interference in the Avengers' activities causes a rift between former allies Captain America and Iron Man.",
            logo: 'public/icons/capamerica.png',
            banner: 'public/banners/captainamerica3.jpg',
            trailer: 'https://www.youtube.com/watch?v=xnv__ogkt0M',
            trakt: 'http://trakt.tv/movies/captain-america-civil-war-2016'
        },
        {   title: "Doctor Strange",
            date: 'November 4th, 2016',
            description: "After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under his wing and trains him to defend the world against evil.",
            logo: 'public/icons/strangelego.png',
            banner: 'public/banners/strange.jpg',
            trailer: 'https://www.youtube.com/watch?v=UF-afgGMj4Y',
            trakt: 'http://www.imdb.com/title/tt1211837'
        },
        {   title: "Luke Cage - Series Premiere",
            date: 'Unknown, 2016',
            description: "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
            logo: 'public/icons/defenders.png',
            banner: 'public/banners/lukecageS01.png',
            trakt: 'http://trakt.tv/shows/marvel-s-luke-cage'
        }

    ]};
    var data2017 = {upcoming: [
        {   title: "Guardians of the Galaxy Vol. 2",
            date: 'May 5th, 2017',
            description: "The galaxy is threatened... again!",
            logo: 'public/icons/marvel.png',
            trakt: 'http://trakt.tv/movies/guardians-of-the-galaxy-vol-2-2017'
        },

        {   title: "Spider-Man",
            date: 'July 28th, 2017',
            description: "Marvel and Sony, working together? How long will this last...",
            logo: 'public/icons/spiderman.jpg',
            trakt: 'http://trakt.tv/movies/untitled-spider-man-reboot-2017'
        },

        {   title: "Thor: Ragnarok",
            date: 'November 3rd, 2017',
            logo: 'public/icons/thor.png',
            trakt: 'http://trakt.tv/movies/thor-ragnarok-2017'
        },

        {   title: "Iron Fist - Series Premiere",
            date: 'Unknown, 2017',
            logo: 'public/icons/defenders.png',
            trakt: 'http://trakt.tv/shows/marvel-s-the-defenders'
        }
    ]};
    var data2018 = {upcoming: [
        {   title: "Black Panther",
            date: "February 16th, 2018",
            description: "",
            logo: "public/icons/marvel.png",
            trakt: ""
        },
        {   title: "Avengers: Infinity War, Part 1",
            date: "May 4th, 2018",
            description: "",
            logo: "public/icons/avengers.png",
            trakt: ""
        },
        {   title: "Ant-Man and The Wasp",
            date: "July 6th, 2018",
            description: "",
            logo: "public/icons/marvel.png",
            trakt: ""
        },
        {   title: "Untitled Fox/Marvel Film",
            date: "July 13th, 2018",
            description: "",
            logo: "public/icons/marvel.png",
            trakt: ""
        }
    ]};
    var data2019 = {upcoming: [
        {   title: "Captain Marvel",
            date: "March 8th, 2019",
            description: "",
            logo: "public/icons/marvel.png",
            trakt: ""
        },
        {   title: "Avengers: Infinity War, Part 2",
            date: "May 3rd, 2019",
            description: "",
            logo: "public/icons/avengers.png",
            trakt: ""
        },
        {   title: "Inhumans",
            date: "July 12th, 2019",
            description: "",
            logo: "public/icons/shield.png",
            trakt: ""
        }
    ]};
    var data2020 = {upcoming: [
        {   title: "Untitled Marvel Film",
            date: "May 1tst, 2020",
            description: "",
            logo: "public/icons/marvel.png",
            trakt: ""
        },
        {   title: "Untitled Marvel Film",
            date: "July 10th, 2020",
            description: "",
            logo: "public/icons/marvel.png",
            trakt: ""
        },
        {   title: "Untitled Marvel Film",
            date: "November 6th, 2020",
            description: "",
            logo: "public/icons/marvel.png",
            trakt: ""
        }
    ]};

    $("#currentList").html(currentTemplate(currentData));
    $("#upcomingList").html(upcomingTemplate(data2017));
    $("#2018List").html(upcomingTemplate(data2018));
    $("#2019List").html(upcomingTemplate(data2019));
    $("#2020List").html(upcomingTemplate(data2020));

    $('.column .image').dimmer({
        on: 'hover'
    });

});