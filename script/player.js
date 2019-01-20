
var b = document.documentElement;
b.setAttribute('data-useragent',  navigator.userAgent);
b.setAttribute('data-platform', navigator.platform );

jQuery(function ($) {
    var supportsAudio = !! document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false;
        mediaPath = './media',
        extension = '',
        tracks = [{
          "track" : 1,
          "name" : "$UICIDEBOY$ - DEAD BATTERIES",
            "length" : "0424",
            "website" : "../media/$UICIDEBOY$ - DEAD BATTERIES.mp3"
        }, {
            "track" : 2,
            "name" : "$UICIDEBOY$ - DEAD BATTERIES",
            "length" : "0245",
            "website" : "../media/$UICIDEBOY$ - DEAD BATTERIES.mp3"
        },{
            "track" : 3,
            "name" : "Claire de Lune",
            "length" : "0515",
            "website" : "../media/$UICIDEBOY$ - DEAD BATTERIES.mp3"
         
        }, {
            "track" : 4,
            "name" : "Bach Cello Prelude",
            "length" : "0832",
            "file" : "BSFM_TF",
            "website" : "httpsia800202.us.archive.org26itemsJohanSebastianBach-PreludeCellocello_64kb.mp3"
        }, {
            "track" : 5,
            "name" : "Chopin Nocturne",
            "length" : "0505",
            "website" : "httpsia800604.us.archive.org16items44FredericChopinNocturneNo.13184144%20Frederic%20Chopin%20-%20Nocturne%20No.13,%201841.mp3"
          
        }, {
            "track" : 6,
            "name" : "Beethoven Moonlight Sonata",
            "length" : "0249",
            "website" : "httpsia800209.us.archive.org23itemsMoonlightSonata_845Sonata_no_14_in_c_sharp_minor_moonlight_op_27_no_2_Iii.Presto.mp3"
        }, {
            "track" : 7,
            "name" : "All The King's Men (Take 1) -- Alternate Cuts",
            "length" : "0544",
            "file" : "AC_ATKMTake_1"
        }, {
            "track" : 8,
            "name" : "All The King's Men (Take 2) -- Alternate Cuts",
            "length" : "0527",
            "file" : "AC_ATKMTake_2"
        }, {
            "track" : 9,
            "name" : "Magus -- Alternate Cuts",
            "length" : "0546",
            "file" : "AC_M"
        }, {
            "track" : 10,
            "name" : "The State Of Wearing Address (fucked up) -- Alternate Cuts",
            "length" : "0525",
            "file" : "AC_TSOWAfucked_up"
        }, {
            "track" : 11,
            "name" : "Magus -- Popeye's (New Years '04 - '05)",
            "length" : "0553",
            "file" : "PNY04-05_M"
        }, {
            "track":  12,
            "name" : "On The Waterfront -- Popeye's (New Years '04 - '05)",
            "length" : "0441",
            "file" : "PNY04-05_OTW"
        }, {
            "track" : 13,
            "name" : "Trance -- Popeye's (New Years '04 - '05)",
            "length" : "1316",
            "file" : "PNY04-05_T"
        }, {
            "track" : 14,
            "name" : "The Forsaken -- Popeye's (New Years '04 - '05)",
            "length" : "0813",
            "file" : "PNY04-05_TF"
        }, {
            "track" : 15,
            "name" : "The State Of Wearing Address -- Popeye's (New Years '04 - '05)",
            "length" : "0702",
            "file" : "PNY04-05_TSOWA"
        }, {
            "track" : 16,
            "name" : "Magus -- Popeye's (Valentine's Day '05)",
            "length" : "0544",
            "file" : "PVD_M"
        }, {
            "track" : 17,
            "name" : "Trance -- Popeye's (Valentine's Day '05)",
            "length" : "1045",
            "file" : "PVD_T"
        }, {
            "track" : 18,
            "name" : "The State Of Wearing Address -- Popeye's (Valentine's Day '05)",
            "length" : "0536",
            "file" : "PVD_TSOWA"
        }, {
            "track" : 19,
            "name" : "All This Is -- Smith St. Basement (010804)",
            "length" : "0249",
            "file" : "SSB01_08_04_ATI"
        }, {
            "track" : 20,
            "name" : "Magus -- Smith St. Basement (010804)",
            "length" : "0546",
            "file" : "SSB01_08_04_M"
        }, {
            "track" : 21,
            "name" : "Beneath The Painted Eye -- Smith St. Basement (060603)",
            "length" : "1307",
            "file" : "SSB06_06_03_BTPE"
        }, {
            "track" : 22,
            "name" : "Innocence -- Smith St. Basement (060603)",
            "length" : "0516",
            "file" : "SSB06_06_03_I"
        }, {
            "track" : 23,
            "name" : "Magus -- Smith St. Basement (060603)",
            "length" : "0547",
            "file" : "SSB06_06_03_M"
        }, {
            "track" : 24,
            "name" : "Madness Explored -- Smith St. Basement (060603)",
            "length" : "0452",
            "file" : "SSB06_06_03_ME"
        }, {
            "track" : 25,
            "name" : "The Forsaken -- Smith St. Basement (060603)",
            "length" : "0843",
            "file" : "SSB06_06_03_TF"
        }, {
            "track" : 26,
            "name" : "All This Is -- Smith St. Basement (122803)",
            "length" : "0300",
            "file" : "SSB12_28_03_ATI"
        }, {
            "track" : 27,
            "name" : "Magus -- Smith St. Basement (122803)",
            "length" : "0609",
            "file" : "SSB12_28_03_M"
        }, {
            "track" : 28,
            "name" : "Madness Explored -- Smith St. Basement (122803)",
            "length" : "0506",
            "file" : "SSB12_28_03_ME"
        }, {
            "track" : 29,
            "name" : "Trance -- Smith St. Basement (122803)",
            "length" : "1233",
            "file" : "SSB12_28_03_T"
        }, {
            "track" : 30,
            "name" : "The Forsaken -- Smith St. Basement (122803)",
            "length" : "0857",
            "file" : "SSB12_28_03_TF"
        }],
        trackCount = tracks.length,
        npAction = $('#npAction'),
        npTitle = $('#npTitle'),
        audio = $('#audio1').bind('play', function () {
            playing = true;
            npAction.text('Now Playing...');
        }).bind('pause', function () {
            playing = false;
            npAction.text('Paused...');
        }).bind('ended', function () {
            npAction.text('Paused...');
            if ((index + 1) < trackCount) {
                index++;
                loadTrack(index);
                audio.play();
            } else {
                audio.pause();
                index = 0;
                loadTrack(index);
            }
        }).get(0),
        btnPrev = $('#btnPrev').click(function () {
            if ((index - 1)  -1) {
                index--;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            } else {
                audio.pause();
                index = 0;
                loadTrack(index);
            }
        }),
        btnNext = $('#btnNext').click(function () {
            if ((index + 1)  < trackCount) {
                index++;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            } else {
                audio.pause();
                index = 0;
                loadTrack(index);
            }
        }),
        li = $('#plList li').click(function () {
            var id = parseInt($(this).index());
            if (id !== index) {
                playTrack(id);
            }
        }),
        loadTrack = function (id) {
            $('.plSel').removeClass('plSel');
            $('#plList li:eq(' + id + ')').addClass('plSel');
            npTitle.text(tracks[id].name);
            index = id;
            audio.src = tracks[id].website;
        },
        playTrack = function (id) {
            loadTrack(id);
            audio.play();
        };
        extension = audio.canPlayType('audio/mpeg')  ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});