const powerButton = document.getElementById("power-button");
const powerScreen = document.getElementById("power-screen");
const mainScreen = document.getElementById("main-screen");
const bootText = document.getElementById("boot-text");
const bootingText = document.getElementById("booting-text");
const menu = document.getElementById("menu");

const career = document.getElementById("career");
const memory = document.getElementById("memory");
const superpowers = document.getElementById("super");
const finalPowerButton = document.getElementById("finalPowerButton");
const officeQuestion = document.getElementById("officeQuestion");
const finalSong = document.getElementById("finalSong");

const typingSound = new Audio("sounds/typing.mp3");
typingSound.volume = 0.5;

const closingSong = new Audio("./sounds/closing-time.mp3");
closingSong.volume = 0.7;

finalPowerButton.addEventListener("click", () => {
  finalPowerButton.style.color = "red";
  finalPowerButton.style.borderColor = "red";
  finalPowerButton.style.boxShadow = "0 0 30px red";

document.getElementById("monitor").style.opacity = "0.6";

  setTimeout(() => {
    document.getElementById("monitor").style.opacity = "1";
  }, 150);

  closingSong.play()
    .then(() => {
      speak("Have you ever seen The Office?");
    })
    .catch((error) => {
      console.log("Song failed to play:", error);
      speak("Have you ever seen The Office?");
    });

  setTimeout(() => {
    officeQuestion.classList.remove("hidden");
    officeQuestion.classList.add("show");
  }, 1200);
});

function speak(text, onEnd) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 1.12;
  speech.pitch = 1.25;

  speech.onend = () => {
    if (onEnd) onEnd();
  };

  speechSynthesis.cancel();
  speechSynthesis.speak(speech);
}

function speakTim(text, onEnd) {
  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";
  speech.rate = 0.95;
  speech.pitch = 0.85;

  speech.onend = () => {
    if (onEnd) onEnd();
  };

  speechSynthesis.cancel();
  speechSynthesis.speak(speech);
}

function speakSteph(text, onEnd) {
  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";
  speech.rate = 1.1;
  speech.pitch = 1.4;

  speech.onend = () => {
    if (onEnd) onEnd();
  };

  speechSynthesis.cancel();
  speechSynthesis.speak(speech);
}

function speakCoworker(text, name, onEnd) {
  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";

  if (name === "Tim Hiller") {
    // Deep, calm, leader energy
    speech.rate = 0.85;
    speech.pitch = 0.7;

  } else if (name === "Jeffrey Demuth") {
    // Friendly storyteller
    speech.rate = 1.1;
    speech.pitch = 1.3;

  } else if (name === "Kaylie Belland") {
    // Warm, emotional
    speech.rate = 1.0;
    speech.pitch = 1.5;

  } else if (name === "Michelle Sabo") {
    // Thoughtful, steady
    speech.rate = 0.95;
    speech.pitch = 1.2;

  } else if (name === "Noah Wilde") {
    // Slightly playful / casual
    speech.rate = 1.2;
    speech.pitch = 1.6;

  } else if (name === "Scott Miller") {
    // Calm, grounded
    speech.rate = 0.8;
    speech.pitch = 0.9;

  } else {
    speech.rate = 1;
    speech.pitch = 1;
  }

  speech.onend = () => {
    if (onEnd) onEnd();
  };

  speechSynthesis.cancel();
  speechSynthesis.speak(speech);
}

function typeCustomText(text, speed = 25, callback) {
  let i = 0;
  bootText.textContent = "";

  typingSound.currentTime = 0;
  typingSound.loop = true;
  typingSound.play().catch(() => {});

  function type() {
    if (i < text.length) {
      bootText.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      typingSound.pause();
      typingSound.currentTime = 0;
      if (callback) callback();
    }
  }

  type();
}

function typeThenSpeak(text, speed = 25, callback) {
  typeCustomText(text, speed, () => {
    speak(text, () => {
      if (callback) callback();
    });
  });
}

powerButton.addEventListener("click", () => {
  powerButton.style.borderColor = "lime";
  powerButton.style.color = "lime";
  powerButton.style.boxShadow = "0 0 30px lime";

  bootingText.classList.remove("hidden");

  setTimeout(() => {
    powerScreen.style.display = "none";
    mainScreen.classList.remove("hidden");
    startSequence();
  }, 3000);
});

function startSequence() {
  typeThenSpeak("Overriding controls. Control transferred to RETIREMENT AI. Initiating retirement archive sequence.", 30, () => {
    runCareerScan();
  });
}

function runCareerScan() {
  typeThenSpeak(`Scanning career history...
25 years detected.
Impact level: immeasurable.
Conclusion: Legendary.`, 25, () => {
    runMemorySequence();
  });
}

function runMemorySequence() {
  typeThenSpeak("Accessing memory archives. Preparing visual playback...", 25, () => {
    startAllFolders();
  });
}

const folders = [
  {
    name: "Early Days",
    intro: "Opening Early Days. Look at this. The system was younger. The photos were grainier. The people: fantastic.",
    outro: "Early Days archive complete. No crashes detected. Only memories.",
    images: [
      "early-days/100717_WalkForHope_1.jpg",
      "early-days/DSC_0021.JPG",
      "early-days/DSC_0625.JPG",
      "early-days/IMG_7322.JPG",
      "early-days/IMG_8110.jpg"
    ],
    lines: [
      "Ah yes. Classic pre pandemic energy.",
      "Historical note: everyone appears to be functioning within acceptable levels of chaos.",
      "A fantastic collection of humans and questionable camera timing.",
      "Probability something needs to be fixed when lunch starts: elevated.",
      "Confirmed. The legend was already loading."
    ]
  },
  {
    name: "Team Memories",
    intro: "Opening Team Memories. Ah, yes. The rare group-photo protocol. Everyone stands close together and pretends this was easy to organize.",
    outro: "Team Memories archive complete. Collective impact confirmed.",
    images: [
      "team-memories/2023 City Park Flannel Color.jpg",
      "team-memories/DSC_0067_2.jpg",
      "team-memories/DSC_0079Sml.jpg",
      "team-memories/IMG_6480.JPG",
      "team-memories/MicrosoftTeams-image.png",
      "team-memories/RFR_Group.jpg"
    ],
    lines: [
      "Teamwork detected. Also possibly matching shirts.",
      "Everyone appears cheerful. This is statistically suspicious.",
      "Coordinated group energy confirmed.",
      "Probability someone asked when lunch starts: elevated.",
      "Ah, the classic team photo formation. Nobody knows where to put their hands.",
      "This one has strong office-family energy."
    ]
  },
  {
    name: "Work Moments",
    intro: "Opening Work Moments. Observe the natural habitat: computers, conference rooms, cables, and the quiet hope that everything just works.",
    outro: "Work Moments archive complete. Systems survived. Mostly.",
    images: [
      "work-moments/2.jpg",
      "work-moments/Image (1).jpeg",
      "work-moments/IMG_3019.jpeg",
      "work-moments/IMG_3021.jpeg",
      "work-moments/IMG_3027.jpg",
      "work-moments/Lobby Discussion 2.jpg",
      "work-moments/Lobby-Discussion-1.jpg",
      "work-moments/MicrosoftTeams-image (6).png",
      "work-moments/MicrosoftTeams-image (14).png"
    ],
    lines: [
      "Sass levels detected, levels too hot to measure.",
      "Shenanigans detected.",
      "A classic configuration.",
      "This appears to be a work moment. The system senses snacks nearby.",
      "Technical patience levels appear above normal human specifications.",
      "Observation. Someone likely said, say cheese.",
      "Someone here has absolutely asked, have you tried turning it off and back on?",
      "Workplace bonding detected. Sassineese likely used to communicate.",
      "Musical talent detected. Fantastic."
    ]
  },
  {
    name: "Sassineese",
    intro: "Opening Sassineese. Warning. Linguistic anomaly detected. Translation engine is nervous.",
    outro: "Sassineese archive complete. Meaning unclear. Impact undeniable.",
    images: [
      "sassineese/314383229_842229816965423_7700937973461292401_n.jpg",
      "sassineese/DSC_0741.JPG",
      "sassineese/Tim.jpg",
      "sassineese/TIm.png"
    ],
    lines: [
      "Analysis suggests Sassineese cannot be taught. It can only be survived.",
      "Tim not detected. Only contribution to sass levels rising.",
      "IT doesn’t make mistakes. They just create unexpected features.",
      "Primary subject identified. Ah... there he is. Confirmation received. That is, unmistakably, the source of Sassineese."
    ]
  }
];

let currentFolder = 0;

function startAllFolders() {
  currentFolder = 0;
  playFolder(folders[currentFolder]);
}

function playFolder(folder) {
  bootText.innerHTML = `
    <div class="memory-board">
      <div class="folder-title">📁 ${folder.name}</div>
      <div class="photo-board">
        ${folder.images.map((img, i) =>
          `<img class="memory-photo" id="photo-${i}" src="${img}">`
        ).join("")}
      </div>
    </div>
  `;

  speak(folder.intro, () => {
    runFolderPhotos(folder);
  });
}

function runFolderPhotos(folder) {
  let index = 0;

  function zoomNextPhoto() {
    if (index > 0) {
      const previous = document.getElementById(`photo-${index - 1}`);
      if (previous) previous.classList.remove("zoomed");
    }

    if (index < folder.images.length) {
      const current = document.getElementById(`photo-${index}`);
      if (current) current.classList.add("zoomed");

      const line = folder.lines[index] || "Memory file reviewed.";

      speak(line, () => {
        setTimeout(() => {
          index++;
          zoomNextPhoto();
        }, 900);
      });
    } else {
      speak(folder.outro, () => {
        currentFolder++;

        if (currentFolder < folders.length) {
          setTimeout(() => {
            playFolder(folders[currentFolder]);
          }, 1000);
        } else {
          endSequence();
        }
      });
    }
  }

setTimeout(zoomNextPhoto, 800);
}

function endSequence() {
  typeThenSpeak(
    "Memory playback complete. All archives reviewed. Conclusion: subject impact cannot be quantified, but it can absolutely be remembered.",
    30,
    () => {
      runQuotesSequence();
    }
  );
}

const quotes = [
  {
    text: `Tim as you embark on your well deserved retirement, I wanted to express my profound appreciation for your unparalleled dedication to Realtime Solutions and the success of our team.

Your willingness to assist with any request, no matter how large or small, has been a consistent source of support and a key factor in the success of the team.

You have been a true leader, fostering a culture of hard work, compassion, and dedication that will undoubtedly continue long after your departure.

Your expertise in the industry will leave a significant gap, but it is your devotion to your colleagues and your genuine, authentic nature that will be most deeply missed.

Thank you for everything.`,
    name: "Tim Hiller",
    reaction: "Statement recorded. Leadership impact confirmed."
  },
  {
    text: `Congratulations on your 25th year at Realtime, what an incredible milestone.

Your dedication and leadership have made such a lasting impact, and this anniversary is a true testament to the passion you bring to everything you do.

I'll never forget the Christmas carols, watching you and Scott play, and you introducing me to Twisted Sister's Christmas album.

Safe to say, you're full of surprises. And that's just one of the many things that makes working with you so memorable.`,
    name: "Jeffrey Demuth",
    reaction: "Statement recorded. Unexpected musical influence detected."
  },
  {
    text: `Tim, I'll admit I've probably been a bit of a pain in your side over the years, especially when it came to points reports.

But I always appreciated your responses. Your famous, well, that's not exactly how that works, will definitely stick with me.

Most of the time I had no idea how anything worked, but you were always our rock. Calm, steady, and somehow always able to figure it out.

One of my favorite memories was ringing bells at the Salvation Army with you. It was freezing, but getting to see you play guitar and sing meant so much.

My kids absolutely loved it, and it's a memory we'll always hold onto.

You'll truly be missed. Wishing you the very best in retirement.`,
    name: "Kaylie Belland",
    reaction: "Statement recorded. Stability and reliability markers confirmed."
  },
  {
    text: `When I first started I was doing Greenbridge uploads.

When I would have an issue, Tim would come sit at my desk and walk me through fixing it, instead of just fixing it himself.

I love to learn the process and am better for it.

I also love that when you ask Tim if something can be done, his initial response is always, of course it can be done. It's just what it will take to get there.

I am not fluent in Sassineese, but I have a beginner level understanding at least.

Best wishes for your next chapter Tim.`,
    name: "Michelle Sabo",
    reaction: "Statement recorded. Knowledge transfer confirmed."
  },
  {
    text: `Can I just pretend Tim isn't retiring because it makes me sad.`,
    name: "Noah Wilde",
    reaction: "Statement recorded. Emotional resistance detected. System response: understandable."
  },
  {
    text: `It's hard to believe that we've known and worked together for over 10 years now.

I still remember my first day at RTS. You helped me with my first bug fix by pointing me in the right direction with a dot A S P page and from there, you never stopped providing valuable guidance and assistance.

You've always been a great collaborator and sounding board.

And most importantly, a great friend.`,
    name: "Scott Miller",
    reaction: "Final statement recorded. Long-term impact detected. Impact confirmed."
  }
];

function runQuotesSequence() {
  let index = 0;

  typeThenSpeak("Opening impact logs. Multiple contributors detected. Reading preserved statements.", 30, () => {
    showNextQuote();
  });

  function showNextQuote() {
    if (index >= quotes.length) {
      setTimeout(() => {
        runSassineeseSequence();
      }, 1500);
      return;
    }

    const q = quotes[index];

    bootText.textContent = `[Impact Log #00${index + 1}]

"${q.text}"

— ${q.name}`;

    speakCoworker(q.text, q.name, () => {
      setTimeout(() => {
        speak(q.reaction, () => {
          index++;
          setTimeout(showNextQuote, 1800);
        });
      }, 800);
    });
  }
}

const sassSamples = [
  {
    text: `"You can play with your light dimmer too!"`,
    context: "— Tim Sass to Kevin Hogan",
    translation: "Technical adjustment available. Emotional judgment withheld."
  },
  {
    text: `"No Stephanie, that does not sound reasonable."`,
    translation: "Proposal evaluated. Logical integrity not detected."
  },
  {
    text: `Steph: "I feel like I'm always asking you to program something you've never done before."\nTim: "I do things I've never done before every day."`,
    translation: "Novel problems are standard operating conditions."
  },
  {
    text: `"I will not save your barbie house, we're not that close."`,
    context: "— Tim Sass to Kristie Elvehjem",
    translation: "Request denied. Relationship threshold not met for intervention."
  },
  {
    text: `"I'm being optimistic, it's new for me."`,
    translation: "Positive outlook initiated. System unfamiliar with this state."
  },
  {
    text: `"As I dig into this I noticed the HubbaBubba was wonky."`,
    translation: "System component identified as unstable. Terminology remains unclear."
  },
  {
    text: `Tim: "'Just' is a four letter word."\nSteph: "So is 'Sass'."`,
    translation: "System no longer certain who is in control."
  }
];

function runSassineeseSequence() {
  let index = 0;

  typeThenSpeak(
    "Initializing Sassineese translation engine. Source material detected. Confidence level... dangerously low.",
    30,
    () => {
      showNextSample();
    }
  );

  function finishSample(s) {
    setTimeout(() => {
      speak(`Translation attempt: ${s.translation}`, () => {
        index++;
        setTimeout(showNextSample, 1500);
      });
    }, 600);
  }

  function showNextSample() {
    if (index >= sassSamples.length) {
      setTimeout(() => {
        runSuperpowers();
      }, 1500);
      return;
    }

    const s = sassSamples[index];

    bootText.textContent = `[Sassineese Sample #00${index + 1}]

${s.text}

${s.context || ""}

Translation attempt:
"${s.translation}"`;

    if (s.text.includes("Steph:") && s.text.includes("Tim:")) {
      speakSteph("I feel like I'm always asking you to program something you've never done before.", () => {
        setTimeout(() => {
          speakTim("I do things I've never done before every day.", () => {
            finishSample(s);
          });
        }, 400);
      });

    } else if (s.text.includes("'Just'") && s.text.includes("So is 'Sass'")) {
      speakTim("Just is a four letter word.", () => {
        setTimeout(() => {
          speakSteph("So is Sass.", () => {
            finishSample(s);
          });
        }, 400);
      });

    } else {
      speak(s.text, () => {
        finishSample(s);
      });
    }
  }
}
function runSuperpowers() {
  typeCustomText(`Initiating behavioral analysis...

Scanning subject patterns...
Cross-referencing observed actions...

Stability under pressure: abnormal
Response time: immediate
Problem solving: instinctive

Conclusion:

Subject is not replaceable.`, 30, () => {
    setTimeout(runFinalEnding, 2000);
  });
}

function showFinalPage(text) {
  bootText.style.fontSize = "16px";
  bootText.style.lineHeight = "1.25";
  bootText.style.height = "auto";
  bootText.style.overflow = "hidden";
  bootText.textContent = text;
}

function runFinalEnding() {
  typingSound.pause();
  typingSound.currentTime = 0;

  finalSong.classList.add("hidden");

  showFinalPage(`Initiating final logout sequence...

Saving session data...

Running final diagnostic...

Evaluating system dependency...

Primary support function:
TIM SASS

Testing standard resolution protocol...

Have you tried turning Tim off and on again?`);

  speak("Initiating final logout sequence. Running final diagnostic. Have you tried turning Tim off and on again?", () => {
    setTimeout(() => {
      showFinalPage(`System response:
ERROR - Tim cannot be turned off to initialize reboot.`);

      speak("Error. Tim cannot be turned off to initialize reboot.", () => {
        setTimeout(() => {
          showFinalPage(`Reattempting...

Have you tried turning Tim off and on again?

System response:
ERROR - Function not supported.`);

          speak("Function not supported.", () => {
            setTimeout(() => {
              showFinalPage(`Attempting to archive...

Archive failed - File too large.`);

              speak("Archive failed. File too large.", () => {
                setTimeout(() => {
                  showFinalPage(`Searching for replacement...

No match found.

Expanding search...

No equivalent detected.`);

                  speak("No equivalent detected.", () => {
                    setTimeout(() => {
                      showFinalPage(`Updating status...

Status: Legend

System note:
Some functions cannot be replaced.`);

                      speak("Some functions cannot be replaced.", () => {
                        setTimeout(() => {
                          showFinalPage(`Final assessment:
Impact exceeds measurable limits.

System override required:
Manual shutdown necessary.

Press power to complete shutdown.`);

                          speak("Final assessment. Impact exceeds measurable limits. Manual shutdown override required. Press the power button to complete logout.", () => {
                            setTimeout(() => {
                              bootText.innerHTML = `
                                <div style="text-align:center; font-size:24px; line-height:1.4;">
                                  Status: <span style="color:lime;">Legend - Permanently Active</span><br><br>
                                  Thank you for 25 years, Tim.<br><br>
                                  <span style="font-size:18px;">
                                    Manual shutdown override required.<br>
                                    Press the power button to complete logout.
                                  </span>
                                </div>
                              `;

                              bootText.style.height = "auto";
                              finalSong.classList.remove("hidden");
                            }, 800);
                          });
                        }, 1500);
                      });
                    }, 1500);
                  });
                }, 1500);
              });
            }, 1500);
          });
        }, 1500);
      });
    }, 1500);
  });
}
