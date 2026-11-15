// Session metadata is keyed by permanent lesson ID.
const voyages = {
  "meter-at-rest": {
    "minutes": 24,
    "thumbnail": {
      "file": "images/meter-at-rest.jpg",
      "alt": "Water rushes over Huka Falls between wooded banks.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_13_01_04a.jpg",
      "creator": "RaviGogna, Flickr",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "calculate",
        "prompt": "Sketch two different timelines that both take a meter from 620 to 626 gallons in two hours. Label the average rate and one assumption needed to estimate a daily loss.",
        "evidence": "Both sketches agree with the endpoints while showing different behavior between them."
      },
      {
        "kind": "design",
        "prompt": "A shared meter advances eight gallons during the next two hours. Write a three-sentence report for the property manager and propose one observation that would narrow the search.",
        "evidence": "Separate the measurement, the attribution you can justify, and the missing evidence."
      }
    ]
  },
  "toilet-after-midnight": {
    "minutes": 22,
    "thumbnail": {
      "file": "images/toilet-after-midnight.jpg",
      "alt": "Water held behind the long concrete wall of Three Gorges Dam.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_12_02_02a.jpg",
      "creator": "Le Grand Portage",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "construct",
        "prompt": "Draw the inlet, tank, float, outlet seal, overflow and bowl. Trace a normal flush and the route you suspect in Case A using two colors.",
        "evidence": "The drawing shows both the water path and how water level controls the inlet."
      },
      {
        "kind": "predict",
        "prompt": "For each case, predict what the tank level would do between two observations. Write the first sentence you would use to request a repair.",
        "evidence": "The request names what you saw and leaves room for the actual failed part to be identified."
      }
    ]
  },
  "water-on-the-glass": {
    "minutes": 20,
    "thumbnail": {
      "file": "images/water-on-the-glass.jpg",
      "alt": "Droplets bead on the ridges of a green banana leaf.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_14_06_00.jpg",
      "creator": "Aaron Escobar, Flickr",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "compare",
        "prompt": "Make a two-column log for the cooking case and the rain case. For each, enter location, timing, one working explanation, and one observation that would weaken it.",
        "evidence": "Each explanation predicts something specific at the next event."
      },
      {
        "kind": "apply",
        "prompt": "A bathroom mirror fogs after a shower while the warm hallway mirror stays clear. Explain how warming the first mirror and exhausting humid air could each change the result.",
        "evidence": "Explain two different ways of changing the relation between surface temperature and dew point."
      }
    ]
  },
  "gap-at-the-door": {
    "minutes": 18,
    "thumbnail": {
      "file": "images/gap-at-the-door.jpg",
      "alt": "Exposed wall framing and insulation at a building opening.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_15_05_01a.jpg",
      "creator": "Giles Douglas",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "map",
        "prompt": "Draw a door from the room side and mark four test positions. Invent a pattern of paper resistance consistent with a localized gap, then a pattern consistent with a good perimeter seal and a cold panel.",
        "evidence": "The two sketches predict different observations along the seam."
      },
      {
        "kind": "decide",
        "prompt": "A replacement strip stops the draft but the door now needs a shove to latch. Write a brief assessment of the repair and name the next check.",
        "evidence": "Your acceptance criteria include both airflow and the door’s normal mechanical function."
      }
    ]
  },
  "four-cold-readings": {
    "minutes": 20,
    "thumbnail": {
      "file": "images/four-cold-readings.jpg",
      "alt": "A road bicycle stands side-on against a red door.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_11_03_04a.jpg",
      "creator": "Jesús Rodriguez",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "calculate",
        "prompt": "Make a four-position sketch for each morning. Write each pressure as a deviation from that axle’s target. Explain which pattern a shared temperature change accounts for more easily.",
        "evidence": "Your comparison uses the placard, wheel position and the measurement conditions."
      },
      {
        "kind": "predict",
        "prompt": "You can request one further set of measurements or one inspection. Choose for the second morning, explain why, and write what you would tell the tire shop.",
        "evidence": "Your handoff gives readings and chronology without claiming to have located a puncture."
      }
    ]
  },
  "tread-remembers": {
    "minutes": 23,
    "thumbnail": {
      "file": "images/tread-remembers.jpg",
      "alt": "A race car turns on a track with its front tires visible.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_07_00_01a.jpg",
      "creator": "Richard Munckton",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "compare",
        "prompt": "Plot the two three-point profiles on paper. Circle the measurement that drives the service decision. Explain exactly what information is lost if you report only the average.",
        "evidence": "Your sketch preserves wheel identity, side of tire and units."
      },
      {
        "kind": "diagnose",
        "prompt": "Write two histories consistent with the uneven profile. List what a current gauge reading, an alignment measurement and a rotation record could each establish.",
        "evidence": "Distinguish a decision you can already make about the tire from a cause that still needs evidence."
      }
    ]
  },
  "oil-level-and-pressure": {
    "minutes": 18,
    "thumbnail": {
      "file": "images/oil-level-and-pressure.jpg",
      "alt": "A working steam locomotive pulls a train through trees.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_15_00_01-d3d5.jpg",
      "creator": "Gerald Friedrich, Pixabay",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "construct",
        "prompt": "Draw a reservoir, pump, passage and bearing. Mark where a level reading gets its information and where a pressure sensor could get its information. Predict the indications if a full reservoir feeds a pump that stops.",
        "evidence": "The model allows quantity and delivery to vary independently."
      },
      {
        "kind": "explain",
        "prompt": "Draft a roadside-assistance message for Case B and a routine maintenance note for Case A. Include the observation that makes the difference in urgency.",
        "evidence": "Each note conveys the engine state, indication and measurement conditions."
      }
    ]
  },
  "arc-on-the-windshield": {
    "minutes": 18,
    "thumbnail": {
      "file": "images/arc-on-the-windshield.jpg",
      "alt": "City traffic follows intersecting streets viewed from above.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_03_01_00.jpg",
      "creator": "Margaret W. Carruthers",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "sketch",
        "prompt": "Draw the path left by a single nick halfway along a blade. Add a dot for a speck fixed to the glass. Explain how their traces differ over two sweeps.",
        "evidence": "Your prediction follows from what rotates and what stays fixed."
      },
      {
        "kind": "compare",
        "prompt": "Write a parked diagnostic sequence for an arc, a broad exterior film and interior fog. For each give one predicted result and the condition for resuming travel.",
        "evidence": "Each observation targets the surface or component your explanation implicates."
      }
    ]
  },
  "where-the-space-went": {
    "minutes": 22,
    "thumbnail": {
      "file": "images/where-the-space-went.jpg",
      "alt": "A worker holds a laptop beside rows of servers.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/OSX_CP2e_Figure_22_00_01.jpg",
      "creator": "WOCinTech Chat/Flickr",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "trace",
        "prompt": "Draw the host storage, guest filesystem, home directory and a separately mounted project volume. For a write in each location, mark which free-space report you would consult.",
        "evidence": "Each reported number belongs to a named boundary."
      },
      {
        "kind": "diagnose",
        "prompt": "The project volume shows 120 MiB available, the home filesystem has 9 GiB, and the editor needs a 300 MiB temporary file beside the project. Predict what moving a 2 GiB home download to another disk changes. Write the next read-only check.",
        "evidence": "Your answer identifies where temporary allocation happens and which capacity could actually change."
      }
    ]
  },
  "cpu-between-samples": {
    "minutes": 20,
    "thumbnail": {
      "file": "images/cpu-between-samples.jpg",
      "alt": "Black heat-sink fins cover a small green computer board.",
      "sourceUrl": "https://github.com/raspberrypi/documentation/blob/master/documentation/asciidoc/computers/compute-module/images/cm5-cooler.jpg",
      "creator": "Raspberry Pi Ltd",
      "license": "CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "interpret",
        "prompt": "Draw a timeline of compiler demand, build progress and typing lag using the first case. Explain what 182 percent means under the stated display convention.",
        "evidence": "Your explanation includes an interval and a CPU reference."
      },
      {
        "kind": "predict",
        "prompt": "Design one comparison for the second run. Give two possible outcomes and the next place you would look for each. State one confounding change you would avoid.",
        "evidence": "The experiment changes one relevant condition and yields different next decisions."
      }
    ]
  },
  "restore-one-file": {
    "minutes": 24,
    "thumbnail": {
      "file": "images/restore-one-file.jpg",
      "alt": "A microSD card sits in a slot on a green board.",
      "sourceUrl": "https://github.com/raspberrypi/documentation/blob/master/documentation/asciidoc/accessories/sd-cards/images/sd-hero.jpg",
      "creator": "Raspberry Pi Ltd",
      "license": "CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "reconstruct",
        "prompt": "Draw a timeline from Tuesday evening to Thursday morning. Mark writes, deletion and captures. Now suppose the Wednesday noon backup was skipped. Identify which remaining version could contain the paragraph.",
        "evidence": "Your answer accounts for both creation and deletion times."
      },
      {
        "kind": "design",
        "prompt": "Write a restore rehearsal for a small project using disposable material. Give a destination, a content check and a way to verify the latest work survived. Explain what would change if the original drive were unavailable.",
        "evidence": "Your procedure distinguishes access to history from independence of storage."
      }
    ]
  },
  "trace-the-display": {
    "minutes": 20,
    "thumbnail": {
      "file": "images/trace-the-display.jpg",
      "alt": "A short cable connects an HDMI plug to a VGA adapter.",
      "sourceUrl": "https://github.com/raspberrypi/documentation/blob/master/documentation/asciidoc/computers/getting-started/images/hdmi-vga.jpg",
      "creator": "Raspberry Pi Ltd",
      "license": "CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "trace",
        "prompt": "Draw the docked path, then add a second arrow showing where the monitor’s own menu originates. Cross out only the failures a working menu makes unlikely.",
        "evidence": "Your diagram distinguishes local image generation from an arriving video signal."
      },
      {
        "kind": "compare",
        "prompt": "A direct connection using a second cable succeeds. Design one further substitution to distinguish the original cable from the docked path, noting which interfaces must remain compatible. State what each possible result would justify.",
        "evidence": "The proposed test controls the input, display mode and the other parts of the signal path."
      }
    ]
  },
  "who-governs": {
    "minutes": 20,
    "activities": [
      {
        "kind": "trace",
        "prompt": "Follow the Authority. Draw the route from statute to a repaired pump in the hypothetical town. Put a verb and a document beside each actor.",
        "evidence": "Your map distinguishes setting a limit, enforcing it and physically correcting a problem."
      },
      {
        "kind": "diagnose",
        "prompt": "Read EPA’s primacy criteria. Suppose a state adopts the right limit but lacks inspection authority. Which link in your map needs a second look, and which job still has to happen at the plant?",
        "evidence": "Identify one missing institutional capacity and one operational duty."
      }
    ],
    "thumbnail": {
      "file": "images/who-governs.jpg",
      "alt": "An aerial view shows the Capitol and the surrounding government buildings.",
      "creator": "Library of Congress",
      "license": "OpenStax American Government 4e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/). Cropped and resized.",
      "sourceUrl": "https://github.com/openstax/osbooks-american-government/blob/a2677245241954039c7ebc996e82a8f3b0b4376f/media/OSC_AmGov_11_00_Congress.jpg"
    }
  },
  "when-a-bill-binds": {
    "minutes": 18,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "Open both S. 475 records. Write a two-sentence correction to an editor who treats enrollment as proof of enactment. Identify one piece of evidence on each page.",
        "evidence": "Your correction identifies who had finished acting at each stage."
      },
      {
        "kind": "apply",
        "prompt": "A chamber changes “shall publish” to “may publish.” Explain what must happen to the revised text before enactment and how the change might affect a resident looking for the report.",
        "evidence": "Track both procedural agreement and the difference between a duty and discretion."
      }
    ],
    "thumbnail": {
      "file": "images/when-a-bill-binds.jpg",
      "alt": "Lyndon Johnson takes Martin Luther King Jr.’s hand at the 1965 Voting Rights Act signing.",
      "creator": "Yoichi Okamoto, via OpenStax",
      "license": "OpenStax American Government 4e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/). Cropped and resized.",
      "sourceUrl": "https://github.com/openstax/osbooks-american-government/blob/a2677245241954039c7ebc996e82a8f3b0b4376f/media/OSC_AmGov_05_00_MLKWarn.png"
    }
  },
  "which-court": {
    "minutes": 22,
    "activities": [
      {
        "kind": "predict",
        "prompt": "Make a three-row decision table for the hypothetical contract. Try two Illinois citizens at $90,000, diverse citizens at exactly $75,000, and diverse citizens at $90,000. Read § 1332(a) and justify each result.",
        "evidence": "One word in the threshold matters. State the assumptions under which your answers hold."
      },
      {
        "kind": "diagnose",
        "prompt": "The losing buyer says “the judge used the wrong contract rule” and “I found a new witness.” Explain why these present different problems on appeal. Then explain what changes if the original judge represented the seller in this matter.",
        "evidence": "Separate review of law, the trial record and judicial conduct."
      }
    ],
    "thumbnail": {
      "file": "images/which-court.jpg",
      "alt": "An empty courtroom with a raised bench and rows of seating.",
      "creator": "OpenStax, American Government 4e",
      "license": "OpenStax American Government 4e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/). Cropped and resized.",
      "sourceUrl": "https://github.com/openstax/osbooks-american-government/blob/a2677245241954039c7ebc996e82a8f3b0b4376f/media/OSC_AmGov_04_03_Courtroom.jpg"
    }
  },
  "when-precedent-binds": {
    "minutes": 25,
    "activities": [
      {
        "kind": "explain",
        "prompt": "Read the Riley majority’s conclusion. Write the holding in one sentence, then give an example of a broader claim a careless reader might attribute to it. Identify the words or reasoning that limit the claim.",
        "evidence": "Your account identifies the search, the asserted justification and the preserved exception."
      },
      {
        "kind": "compare",
        "prompt": "Draft two short bench notes for the routine and emergency hypotheticals. Name the governing precedent, the material fact and one unanswered factual question in the harder case.",
        "evidence": "Show how two judges could accept the same precedent yet need different evidence."
      }
    ],
    "thumbnail": {
      "file": "images/when-precedent-binds.jpg",
      "alt": "Soldiers escort students outside Central High School in Little Rock in 1957.",
      "creator": "U.S. Army",
      "license": "OpenStax American Government 4e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/). Cropped and resized.",
      "sourceUrl": "https://github.com/openstax/osbooks-american-government/blob/a2677245241954039c7ebc996e82a8f3b0b4376f/media/OSC_AmGov_05_02_LittleRock.jpg"
    }
  },
  "inside-the-cabinet": {
    "minutes": 23,
    "activities": [
      {
        "kind": "construct",
        "prompt": "Use § 101 to locate the departments whose names most plausibly fit these jobs: highway safety, workplace safety, and military procurement. For transportation, follow § 102 and § 30111 and identify what each additional statute establishes.",
        "evidence": "Distinguish a plausible department from verified legal authority."
      },
      {
        "kind": "apply",
        "prompt": "Draft a four-sentence secretary’s memo on rear visibility. Give the president one recommendation, identify the official or agency that must act, name a legal criterion and specify a factual question for engineers.",
        "evidence": "The memo separates advice, authority and technical judgment."
      }
    ],
    "thumbnail": {
      "file": "images/inside-the-cabinet.jpg",
      "alt": "An illustration shows George Washington seated with members of his first Cabinet.",
      "creator": "Library of Congress",
      "license": "OpenStax American Government 4e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/). Cropped and resized.",
      "sourceUrl": "https://github.com/openstax/osbooks-american-government/blob/a2677245241954039c7ebc996e82a8f3b0b4376f/media/OSC_AmGov_15_01_WasCabinet.jpg"
    }
  },
  "from-statute-to-rule": {
    "minutes": 24,
    "activities": [
      {
        "kind": "trace",
        "prompt": "Follow the Authority. Find the mandate, the agency, the publication and effective dates, and one compliance date in the final rule. Write a five-line timeline a vehicle engineer could use.",
        "evidence": "Each date has a verb and a covered actor."
      },
      {
        "kind": "design",
        "prompt": "Find one measurable requirement in the rule. Propose a test of compliance and a separate study of whether the feature reduces harm. Identify a way the two results could diverge.",
        "evidence": "The second design accounts for drivers or exposure as well as equipment."
      }
    ],
    "thumbnail": {
      "file": "images/from-statute-to-rule.jpg",
      "alt": "A cigarette package carries a printed surgeon general’s warning.",
      "creator": "Debora Cartagena, Centers for Disease Control and Prevention",
      "license": "OpenStax American Government 4e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/). Cropped and resized.",
      "sourceUrl": "https://github.com/openstax/osbooks-american-government/blob/a2677245241954039c7ebc996e82a8f3b0b4376f/media/OSC_AmGov_04_02_Cigarette.jpg"
    }
  },
  "permission-to-spend": {
    "minutes": 21,
    "activities": [
      {
        "kind": "calculate",
        "prompt": "Rebuild the four figures for the invented fund. Then assume another $2 million of valid invoices is paid against existing obligations. Recalculate unobligated authority and unpaid obligations.",
        "evidence": "Show which balance changes when payment follows an earlier commitment."
      },
      {
        "kind": "diagnose",
        "prompt": "A legislator says, “We authorized $12 million, so the town can start work.” Write the town treasurer’s response and name the two records you would request before relying on a federal award.",
        "evidence": "Distinguish program-wide budget authority from a binding commitment to this town."
      }
    ],
    "thumbnail": {
      "file": "images/permission-to-spend.jpg",
      "alt": "Members of the House Appropriations Committee hear testimony on federal finances in 1936.",
      "creator": "Library of Congress",
      "license": "OpenStax American Government 4e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/). Cropped and resized.",
      "sourceUrl": "https://github.com/openstax/osbooks-american-government/blob/a2677245241954039c7ebc996e82a8f3b0b4376f/media/OSC_AmGov_12_01_Approp.jpg"
    }
  },
  "replacing-a-government": {
    "minutes": 22,
    "activities": [
      {
        "kind": "predict",
        "prompt": "Run the 100-seat example twice. First the two opposition groups stay apart. Then 23 members of the smaller group back the larger group’s candidate. Predict the Article 67 result each time and identify what changed.",
        "evidence": "Count support for the proposed successor against the membership threshold."
      },
      {
        "kind": "compare",
        "prompt": "Imagine identical policy disagreements in Germany and the U.S. Write one plausible route to a policy concession in each. Explain who can stay in office after losing the policy vote and what additional event would change that.",
        "evidence": "Separate bargaining over a bill from the rule for acquiring executive office."
      }
    ],
    "thumbnail": {
      "file": "images/replacing-a-government.jpg",
      "alt": "Barack Obama delivers remarks beside German chancellor Angela Merkel at a welcoming ceremony.",
      "creator": "Stephen Hassay",
      "license": "OpenStax American Government 4e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/). Cropped and resized.",
      "sourceUrl": "https://github.com/openstax/osbooks-american-government/blob/a2677245241954039c7ebc996e82a8f3b0b4376f/media/OSC_AmGov_12_01_ObamaMerk.jpg"
    }
  },
  "physics-record": {
    "minutes": 40,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "Draw three position–time histories lasting 12 s with endpoints 0 m and 12 m. Give one constant velocity, one rest interval, and one reversal. Calculate distance and average velocity for each.",
        "evidence": "Coordinates, elapsed times, and path lengths are mutually consistent."
      },
      {
        "kind": "investigate",
        "prompt": "A colleague says, “The probe has zero average velocity, so it was stationary.” Write a counterexample and specify one measurement that distinguishes it from rest.",
        "evidence": "A claim about an average is separated from a claim about every instant."
      }
    ],
    "feedback": [
      "Many answers work. A constant +1 m/s journey travels 12 m. A journey that moves 12 m in 6 s then rests also travels 12 m. Traveling to 18 m then back to 12 m travels 24 m. All have average velocity +1 m/s.",
      "An out-and-back trip has zero average velocity. An intermediate position away from the origin disproves rest, although one sample at the origin would not prove rest."
    ],
    "thumbnail": {
      "file": "images/physics-record.jpg",
      "alt": "An overhead view of traffic following several intersecting streets.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_03_01_00.jpg",
      "creator": "Margaret W. Carruthers",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "physics-slope": {
    "minutes": 55,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "For x(t)=4t−t² metres on 0≤t≤5 s, derive v and a, sketch all three graphs, and identify slowing, turning, and speeding intervals. Calculate displacement and distance.",
        "evidence": "Graph slopes and sign reasoning agree with the derivatives."
      },
      {
        "kind": "investigate",
        "prompt": "Two probes share a(t)=−2 m/s² but have initial velocities +6 and −1 m/s. Compare their first two seconds. Explain why acceleration alone cannot reconstruct motion.",
        "evidence": "Initial conditions are used as information, not guessed."
      }
    ],
    "feedback": [
      "v=4−2t and a=−2. The turn is at 2 s, x=4 m. Final x=−5 m, so displacement is −5 m and distance is 4+9=13 m. It slows on 0<t<2 and speeds up on 2<t<5.",
      "The +6 m/s probe slows to +2 m/s; the −1 m/s probe speeds up to −5 m/s. Both have the same change in velocity, −4 m/s."
    ],
    "thumbnail": {
      "file": "images/physics-slope.jpg",
      "alt": "A steam locomotive and its train pass through a wooded landscape.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_15_00_01-d3d5.jpg",
      "creator": "Gerald Friedrich, Pixabay",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "physics-observers": {
    "minutes": 65,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "Repeat the launch with platform speed 5 m/s and upward launch speed 8 m/s, using g=10. Find flight time, maximum height, and landing position in both frames.",
        "evidence": "A shared flight time is used consistently across components."
      },
      {
        "kind": "investigate",
        "prompt": "A probe launches at 10 m/s at 30° above horizontal from ground level. Resolve its initial velocity, find its return time, and explain why its speed at the top is not zero.",
        "evidence": "Vector components are distinguished from speed."
      },
      {
        "kind": "investigate",
        "prompt": "Explain which conclusions fail if the platform accelerates, and which fail if air resistance matters.",
        "evidence": "The altered assumption is connected to a specific equation."
      }
    ],
    "feedback": [
      "Flight time 1.6 s; maximum height 3.2 m; ground landing x=8 m, platform landing x′=0.",
      "Components are (5√3,5) m/s. Flight time is 1 s; top speed is 5√3 m/s in the ground frame.",
      "An accelerating platform changes relative acceleration; drag can couple the component equations through speed and direction."
    ],
    "thumbnail": {
      "file": "images/physics-observers.jpg",
      "alt": "Intersecting urban streets and traffic seen from a high viewpoint.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_03_01_00.jpg",
      "creator": "Margaret W. Carruthers",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "physics-coasting": {
    "minutes": 60,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "A 3 kg cart moving at +4 m/s experiences a net force of −6 N for 3 s. Draw the force and motion diagrams separately; find acceleration, final velocity, displacement, and the turning time.",
        "evidence": "Forces determine acceleration and initial conditions determine the resulting motion."
      },
      {
        "kind": "investigate",
        "prompt": "Explain why a probe and the exhaust can exert equal opposite forces while the probe accelerates. Draw a boundary around the probe alone.",
        "evidence": "Third-law partners are assigned to different bodies."
      },
      {
        "kind": "investigate",
        "prompt": "Design a measurement that could detect an unmodeled small resistive force during coasting. State what you would measure and how you would infer net force.",
        "evidence": "An observation is connected to a quantitative model."
      }
    ],
    "feedback": [
      "a=−2 m/s²; final v=−2 m/s; displacement 12−9=3 m. It turns at t=2 s. A net-force arrow is a summary; a full free-body diagram must also identify the actual external force sources.",
      "Equal opposite interactions cancel only when both interacting bodies belong to the chosen combined system.",
      "Estimate acceleration from changes in measured velocity over known time intervals; multiply by the known mass, with measurement uncertainty acknowledged."
    ],
    "thumbnail": {
      "file": "images/physics-coasting.jpg",
      "alt": "A road bicycle stands in profile against a red doorway.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_11_03_04a.jpg",
      "creator": "Jesús Rodriguez",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "physics-floor": {
    "minutes": 70,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "For the worked sled, find friction and acceleration at horizontal pulls of 0, 15, and 50 N, starting from rest each time.",
        "evidence": "The static and kinetic models are chosen from the physical state."
      },
      {
        "kind": "investigate",
        "prompt": "A 5 kg block rests on a 15° incline with μ_s=0.4 and g=10. Find N, required friction, and maximum available static friction. Does it slip?",
        "evidence": "Resolved components and an inequality justify the conclusion."
      },
      {
        "kind": "investigate",
        "prompt": "A 10 kg stationary sled is pulled with 30 N at 30° above horizontal. Find N and required static friction, and test equilibrium using μ_s=0.4.",
        "evidence": "The normal force is derived rather than assumed equal to weight."
      }
    ],
    "feedback": [
      "At 0 and 15 N pulls, static friction magnitudes are 0 and 15 N; acceleration is zero. At 50 N it slides, friction is about 30 N and a=2 m/s².",
      "N≈48.3 N; required friction≈12.9 N; maximum≈19.3 N. It can remain stationary.",
      "N=85 N; required horizontal friction≈26.0 N; maximum=34 N, so equilibrium is possible."
    ],
    "thumbnail": {
      "file": "images/physics-floor.jpg",
      "alt": "A bicycle wheel and frame rest on the ground beside a red door.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_11_03_04a.jpg",
      "creator": "Jesús Rodriguez",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "physics-turning": {
    "minutes": 65,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "Draw a circle and tangent velocity arrows at two nearby points. Reposition the arrows tail-to-tail and construct Δv. Explain the inward limit.",
        "evidence": "The direction of acceleration follows from a vector difference."
      },
      {
        "kind": "investigate",
        "prompt": "A 0.5 kg object circles at 3 m/s on radius 1.5 m. Find inward acceleration and force; repeat at double speed.",
        "evidence": "The square dependence on speed is explicit."
      },
      {
        "kind": "investigate",
        "prompt": "Compare doubling radius at fixed speed with doubling radius at fixed angular speed. Then describe the motion just after an ideal string breaks.",
        "evidence": "Controlled variables and remaining forces are identified."
      }
    ],
    "feedback": [
      "The two velocity vectors have equal lengths but different directions; their difference approaches the inward direction as their angular separation tends to zero.",
      "Initially a=6 m/s² and F=3 N. At 6 m/s, a=24 m/s² and F=12 N.",
      "At fixed v, acceleration halves; at fixed ω, it doubles. After release, initial motion is tangent, followed by whatever remaining forces produce."
    ],
    "thumbnail": {
      "file": "images/physics-turning.jpg",
      "alt": "A race car rounds a bend on a paved circuit.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_07_00_01a.jpg",
      "creator": "Richard Munckton",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "physics-launch": {
    "minutes": 70,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "Integrate F(x)=6x N from 0 to 2 m for a 3 kg carriage initially at rest. Find final speed without resistance, then with a constant 2 N opposing force.",
        "evidence": "Net work includes the contribution of each force."
      },
      {
        "kind": "investigate",
        "prompt": "How much net work is needed to change a 2 kg probe from 3 to 6 m/s? Compare with the work from rest to 3 m/s.",
        "evidence": "The initial kinetic energy is retained in the subtraction."
      },
      {
        "kind": "investigate",
        "prompt": "Draw two nonnegative force–position graphs with equal work over 3 m but different peak forces. Explain why work alone cannot determine peak force or power.",
        "evidence": "A total is separated from the history that produces it."
      }
    ],
    "feedback": [
      "Actuator work is 12 J; speed is √8≈2.83 m/s. With resistance, net work is 8 J and speed is √(16/3)≈2.31 m/s.",
      "The change is 36−9=27 J, compared with 9 J from rest to 3 m/s.",
      "For example, a constant 6 N force over 3 m and a linear rise from 0 to 12 N both deliver 18 J. Power also requires timing."
    ],
    "thumbnail": {
      "file": "images/physics-launch.jpg",
      "alt": "Steam billows beside a working locomotive and its train.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_15_00_01-d3d5.jpg",
      "creator": "Gerald Friedrich, Pixabay",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "physics-boundary": {
    "minutes": 75,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "A 1 kg probe at +8 m/s sticks to a 3 kg free catcher moving at −2 m/s. Find their final velocity and the change in total kinetic energy.",
        "evidence": "Signs and the system boundary are explicit."
      },
      {
        "kind": "investigate",
        "prompt": "The probe’s capture lasts 0.05 s. Find its impulse and average force. Explain why the peak force remains unknown.",
        "evidence": "Impulse is calculated for one body, not confused with total system momentum."
      },
      {
        "kind": "investigate",
        "prompt": "Redesign the boundary for a catcher bolted to a station. Explain which earlier equation fails and what additional information or enlarged system would help.",
        "evidence": "Conservation is justified by external interactions, not declared by habit."
      }
    ],
    "feedback": [
      "Initial momentum is 8−6=2 kg m/s; final v=0.5 m/s. Initial K=32+6=38 J; final K=0.5 J; kinetic-energy change is −37.5 J.",
      "Probe impulse is 1(0.5−8)=−7.5 N s; average force is −150 N. A force–time history is needed for peak force.",
      "The two-body momentum conservation equation fails because the support supplies external impulse. Include its impulse or use a suitably enlarged system."
    ],
    "thumbnail": {
      "file": "images/physics-boundary.jpg",
      "alt": "A race car travels across the track with its body and wheels visible.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_07_00_01a.jpg",
      "creator": "Richard Munckton",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "calculus-total": {
    "minutes": 45,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "A probe has v(t)=2−t m/s for 0≤t≤4 s. Sketch the graph and calculate displacement and distance. State why the two totals differ.",
        "evidence": "The zero crossing is used to split the absolute-value integral."
      },
      {
        "kind": "investigate",
        "prompt": "Construct two nonnegative continuous rate functions on [0,2] that integrate to 4 but have different peaks. Verify both totals.",
        "evidence": "An integral is used to demonstrate non-uniqueness of the history."
      },
      {
        "kind": "investigate",
        "prompt": "For the probe, choose x(0)=5 m and determine x(4). Explain why the definite integral alone could not supply that position.",
        "evidence": "Accumulated change is distinguished from state."
      }
    ],
    "feedback": [
      "The velocity crosses zero at 2 s. Displacement is 0 m; distance is 2+2=4 m.",
      "For example f(t)=2 and g(t)=2t both integrate to 4 on [0,2], with peaks 2 and 4.",
      "Final position is 5 m because the net change is zero. The integral provides no initial position."
    ],
    "thumbnail": {
      "file": "images/calculus-total.jpg",
      "alt": "A long concrete dam holds back a broad body of water.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_12_02_02a.jpg",
      "creator": "Le Grand Portage",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "calculus-rate": {
    "minutes": 60,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "For A(x)=∫₀ˣ(3−t)dt on [0,6], determine increasing and decreasing intervals, maximum value, and concavity. Sketch f and A separately.",
        "evidence": "The sign of f is used for A’s slope, while the slope of f determines A’s concavity."
      },
      {
        "kind": "investigate",
        "prompt": "Differentiate ∫₁ˣ³ cos(t)dt and ∫ₓˣ²(1+t²)dt. Explain every endpoint factor and sign.",
        "evidence": "The chain rule and lower-limit subtraction are explicit."
      },
      {
        "kind": "investigate",
        "prompt": "Construct a rate with a jump and sketch its continuous accumulated total. Explain why that total lacks a derivative at the jump.",
        "evidence": "A theorem’s hypotheses are tested against an example."
      }
    ],
    "feedback": [
      "A=3x−x²/2. It increases to x=3, decreases afterward, has maximum 4.5, and is concave down.",
      "First derivative: 3x²cos(x³). Second: 2x(1+x⁴)−(1+x²).",
      "A step from 1 to 3 produces a continuous piecewise-linear total with slopes 1 and 3."
    ],
    "thumbnail": {
      "file": "images/calculus-rate.jpg",
      "alt": "White water rushes through a narrow channel bordered by trees.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_13_01_04a.jpg",
      "creator": "RaviGogna, Flickr",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "calculus-substitution": {
    "minutes": 65,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "Evaluate ∫₀² 3x²(1+x³)²dx. State u, du, both transformed bounds, and the final value.",
        "evidence": "Every part of the variable change belongs to the same coordinate."
      },
      {
        "kind": "investigate",
        "prompt": "Find antiderivatives of x cos(x²), 1/(3x+2) on x>−2/3, and eˣ/(1+eˣ). Verify each by differentiation.",
        "evidence": "Constant derivative factors are preserved."
      },
      {
        "kind": "investigate",
        "prompt": "A researcher transforms ∫₀¹2x(x²+1)³dx into ∫₀¹u³du. Diagnose the precise error and describe two valid repair routes.",
        "evidence": "Endpoint meaning is explained, not merely corrected."
      }
    ],
    "feedback": [
      "u=1+x³; du=3x²dx; bounds 1 and 9. The result is (9³−1)/3=728/3.",
      "½sin(x²)+C; (1/3)ln(3x+2)+C on the stated domain; ln(1+eˣ)+C.",
      "Use u bounds 1 and 2, or substitute back to x before applying x bounds 0 and 1."
    ],
    "thumbnail": {
      "file": "images/calculus-substitution.jpg",
      "alt": "Water droplets collect along the parallel ridges of a green leaf.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_14_06_00.jpg",
      "creator": "Aaron Escobar, Flickr",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "calculus-parts": {
    "minutes": 75,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "Find ∫x cos x dx and verify it. Then evaluate ∫₀^(π/2)x cos x dx.",
        "evidence": "The boundary product and remaining integral both have correct signs."
      },
      {
        "kind": "investigate",
        "prompt": "Find ∫x ln x dx for x>0. Compare a useful u choice with the reversed choice and explain the difference.",
        "evidence": "Method selection is justified by simplification."
      },
      {
        "kind": "investigate",
        "prompt": "Derive ∫x²sin x dx using repeated parts. Differentiate the full answer and identify which terms cancel.",
        "evidence": "Repeated operations remain connected to the original product rule."
      }
    ],
    "feedback": [
      "x sin x+cos x+C; definite result π/2−1.",
      "(x²/2)ln x−x²/4+C. Differentiating ln x simplifies it, whereas integrating it first creates extra work.",
      "−x²cos x+2x sin x+2cos x+C. Differentiation cancels the −2x cos x and +2x cos x terms, and the +2sin x and −2sin x terms."
    ],
    "thumbnail": {
      "file": "images/calculus-parts.jpg",
      "alt": "Wood framing and insulation divide an unfinished wall into sections.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_15_05_01a.jpg",
      "creator": "Giles Douglas",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "calculus-identities": {
    "minutes": 75,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "Integrate sin³x and sin²x separately. Explain why the same first step is not equally useful for both.",
        "evidence": "Odd powers supply a derivative factor; even powers invite a half-angle identity."
      },
      {
        "kind": "investigate",
        "prompt": "Evaluate ∫₀^π sin²x dx and find its average value on that interval. Then integrate sin²x cos²x.",
        "evidence": "A definite integral and an average are distinguished."
      },
      {
        "kind": "investigate",
        "prompt": "Integrate sec⁴x by reserving sec²x dx and converting the remaining factor. Differentiate your result on an interval avoiding singularities.",
        "evidence": "The identity and substitution form one coherent change."
      }
    ],
    "feedback": [
      "∫sin³x dx=−cos x+cos³x/3+C. ∫sin²x dx=x/2−sin 2x/4+C.",
      "The definite integral is π/2 and average is 1/2. The product integral is x/8−sin 4x/32+C.",
      "sec⁴x=sec²x(1+tan²x), giving tan x+tan³x/3+C."
    ],
    "thumbnail": {
      "file": "images/calculus-identities.jpg",
      "alt": "The circular wheels and triangular frame of a road bicycle stand against a red door.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_11_03_04a.jpg",
      "creator": "Jesús Rodriguez",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "calculus-triangle": {
    "minutes": 80,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "Evaluate ∫₀¹ dx/√(4−x²), stating the substitution, transformed bounds, and sign choice.",
        "evidence": "The radical and differential are both transformed."
      },
      {
        "kind": "investigate",
        "prompt": "For ∫x²/√(9−x²) dx on −3<x<3, use x=3sin θ, derive an antiderivative, and differentiate it.",
        "evidence": "Back-substitution and the square-root domain agree."
      },
      {
        "kind": "investigate",
        "prompt": "Match each radical √(16−x²), √(x²+16), and √(x²−16) to a useful substitution. State a valid branch for each and explain the identity it exploits.",
        "evidence": "Substitutions follow quadratic structure rather than memorized surface similarity."
      }
    ],
    "feedback": [
      "x=2sin θ, θ from 0 to π/6. The quotient simplifies to dθ, giving π/6.",
      "(9/2)arcsin(x/3)−(x/2)√(9−x²)+C.",
      "Use x=4sin θ with θ in [−π/2,π/2]; x=4tan θ with θ in (−π/2,π/2); x=4sec θ on x≥4 with θ in [0,π/2)."
    ],
    "thumbnail": {
      "file": "images/calculus-triangle.jpg",
      "alt": "Timber supports form intersecting lines within an unfinished building wall.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_15_05_01a.jpg",
      "creator": "Giles Douglas",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "calculus-fractions": {
    "minutes": 85,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "Decompose and integrate (5x+7)/[(x+1)(x+2)]. Verify by recombining the fractions.",
        "evidence": "Coefficient equations reconstruct the original numerator."
      },
      {
        "kind": "investigate",
        "prompt": "Decompose and integrate 1/[x(x+1)²]. Do the calculation independently before opening feedback. Explain why omitting the first-power (x+1) term is unjustified.",
        "evidence": "Every repeated-factor term is included."
      },
      {
        "kind": "investigate",
        "prompt": "Integrate (x²+1)/(x+1) and (4x+1)/(x²+4). State intervals or domains on which your results apply.",
        "evidence": "Polynomial division and an irreducible quadratic receive different treatment."
      }
    ],
    "feedback": [
      "2/(x+1)+3/(x+2), giving 2ln|x+1|+3ln|x+2|+C.",
      "1/x−1/(x+1)−1/(x+1)²; integral ln|x|−ln|x+1|+1/(x+1)+C. The full repeated-factor form is needed to represent the general numerator.",
      "x²/2−x+2ln|x+1|+C for x≠−1 on each interval; 2ln(x²+4)+(1/2)arctan(x/2)+C for all real x."
    ],
    "thumbnail": {
      "file": "images/calculus-fractions.jpg",
      "alt": "A worker uses a laptop beside repeated rows of server cabinets.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/OSX_CP2e_Figure_22_00_01.jpg",
      "creator": "WOCinTech Chat/Flickr",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "calculus-estimate": {
    "minutes": 80,
    "activities": [
      {
        "kind": "investigate",
        "prompt": "Approximate ∫₀¹x²dx with trapezoidal n=2 and n=4, then Simpson n=2. Compare with 1/3 and explain the error signs and ratios.",
        "evidence": "Numerical results are interpreted through curvature and refinement."
      },
      {
        "kind": "investigate",
        "prompt": "For the force readings 0,3,5,6,6 N at positions 0 through 4 m, compute Simpson’s estimate as well as the trapezoidal one. State what their disagreement does and does not establish.",
        "evidence": "A comparison of methods is not presented as a guaranteed error bar."
      },
      {
        "kind": "investigate",
        "prompt": "For f(x)=x² on [0,1], choose n to guarantee trapezoidal error at most 0.001 using the derivative bound. Separately explain why ±0.2 N sample errors do not bound unseen force spikes.",
        "evidence": "A proved numerical bound is distinguished from a data assumption."
      }
    ],
    "feedback": [
      "T₂=0.375; T₄=0.34375; errors 1/24 and 1/96, both positive. Simpson gives 1/3 exactly.",
      "Simpson gives (1/3)(0+12+10+24+6)=52/3≈17.333 J. The difference indicates sensitivity to interpolation; it is not a certified error bound for the true force.",
      "The bound is 1/(6n²)≤0.001, so n≥13 suffices. Measurement errors constrain values at sample points, not all possible values between them."
    ],
    "thumbnail": {
      "file": "images/calculus-estimate.jpg",
      "alt": "Turbulent white water breaks into varied streams in a tree-lined channel.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_13_01_04a.jpg",
      "creator": "RaviGogna, Flickr",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized. Reused from an existing local photograph with an additional crop for this lesson."
    }
  },
  "before-the-verdict": {
    "minutes": 30,
    "thumbnail": {
      "file": "images/before-the-verdict.jpg",
      "alt": "Droplets bead on the ridges of a green banana leaf.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_14_06_00.jpg",
      "creator": "Aaron Escobar, Flickr",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "explain",
        "prompt": "Write three interpretations of “Fine,” the observation supporting each, and one missing fact. Then draft a clarification that does not presuppose hostility.",
        "evidence": "Show the distinction developed in the lesson, identify your assumptions, and justify the proposed action."
      },
      {
        "kind": "apply",
        "prompt": "Change the case to three missed agreements. Write a boundary naming the behavior, its practical effect, and what you will do next. Explain why this differs from accusing someone of a motive.",
        "evidence": "Revise the model when conditions change and explain a limitation rather than claiming certainty."
      }
    ]
  },
  "the-task-between-us": {
    "minutes": 35,
    "thumbnail": {
      "file": "images/the-task-between-us.jpg",
      "alt": "Exposed wall framing and insulation at a building opening.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_15_05_01a.jpg",
      "creator": "Giles Douglas",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "explain",
        "prompt": "Choose a fictional household task. Map its five components and write a completion agreement with a trigger, owner, deadline, and exception procedure.",
        "evidence": "Show the distinction developed in the lesson, identify your assumptions, and justify the proposed action."
      },
      {
        "kind": "apply",
        "prompt": "Give two people different available time and energy. Redesign the agreement and explain what makes it fair without relying on identical task counts.",
        "evidence": "Revise the model when conditions change and explain a limitation rather than claiming certainty."
      }
    ]
  },
  "after-the-missed-promise": {
    "minutes": 30,
    "thumbnail": {
      "file": "images/after-the-missed-promise.jpg",
      "alt": "Water held behind the long concrete wall of Three Gorges Dam.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_12_02_02a.jpg",
      "creator": "Le Grand Portage",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "explain",
        "prompt": "Draft a repair for the application case in five sentences or fewer. Identify which sentence addresses the event, impact, offer, and future process.",
        "evidence": "Show the distinction developed in the lesson, identify your assumptions, and justify the proposed action."
      },
      {
        "kind": "apply",
        "prompt": "Invent a repeated-failure version. Replace one promise with a verifiable process change and explain what evidence would show improvement over time.",
        "evidence": "Revise the model when conditions change and explain a limitation rather than claiming certainty."
      }
    ]
  },
  "one-claim-many-echoes": {
    "minutes": 35,
    "thumbnail": {
      "file": "images/one-claim-many-echoes.jpg",
      "alt": "A short cable connects an HDMI plug to a VGA adapter.",
      "sourceUrl": "https://github.com/raspberrypi/documentation/blob/master/documentation/asciidoc/computers/getting-started/images/hdmi-vga.jpg",
      "creator": "Raspberry Pi Ltd",
      "license": "CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "explain",
        "prompt": "Draw the five-post evidence network. Mark which paths share an origin and identify the exact wording that exceeds the fictional announcement.",
        "evidence": "Show the distinction developed in the lesson, identify your assumptions, and justify the proposed action."
      },
      {
        "kind": "apply",
        "prompt": "Choose one accessible, non-sensitive factual claim. Spend at most eight minutes tracing it. Record the original wording if found, the supported conclusion, and one uncertainty. An unresolved result is acceptable.",
        "evidence": "Revise the model when conditions change and explain a limitation rather than claiming certainty."
      }
    ]
  },
  "the-denominator-disappeared": {
    "minutes": 35,
    "thumbnail": {
      "file": "images/the-denominator-disappeared.jpg",
      "alt": "A road bicycle stands side-on against a red door.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_11_03_04a.jpg",
      "creator": "Jesús Rodriguez",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "explain",
        "prompt": "Calculate relative and absolute changes from two to four and from forty to thirty-six. Write two accurate headlines with different emphasis.",
        "evidence": "Show the distinction developed in the lesson, identify your assumptions, and justify the proposed action."
      },
      {
        "kind": "apply",
        "prompt": "Design the comparison you would want before choosing bicycle parking. Specify denominator, period, reporting definition, and one causal claim your comparison still could not establish.",
        "evidence": "Revise the model when conditions change and explain a limitation rather than claiming certainty."
      }
    ]
  },
  "the-next-click": {
    "minutes": 30,
    "thumbnail": {
      "file": "images/the-next-click.jpg",
      "alt": "Water rushes over Huka Falls between wooded banks.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_13_01_04a.jpg",
      "creator": "RaviGogna, Flickr",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "explain",
        "prompt": "Map one hypothetical viewing session into cues, actions, payoffs, and transitions. Label what is observed and what you are merely assuming about motives.",
        "evidence": "Show the distinction developed in the lesson, identify your assumptions, and justify the proposed action."
      },
      {
        "kind": "apply",
        "prompt": "Design a two-session comparison changing one entry condition. Specify the intended experience, a simple observation, a stopping point, and two confounds. Running it later is optional.",
        "evidence": "Revise the model when conditions change and explain a limitation rather than claiming certainty."
      }
    ]
  },
  "a-place-to-return": {
    "minutes": 35,
    "thumbnail": {
      "file": "images/a-place-to-return.jpg",
      "alt": "City traffic follows intersecting streets viewed from above.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/Figure_03_01_00.jpg",
      "creator": "Margaret W. Carruthers",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "explain",
        "prompt": "Design a comparison table for two fictional communities: recurring work, newcomer route, time cost, evidence of welcome, and exit condition.",
        "evidence": "Show the distinction developed in the lesson, identify your assumptions, and justify the proposed action."
      },
      {
        "kind": "apply",
        "prompt": "Write a two-visit plan for the better fit. Name one observation on visit one and one bounded participation on visit two. Explain what finding would change your choice.",
        "evidence": "Revise the model when conditions change and explain a limitation rather than claiming certainty."
      }
    ]
  },
  "make-the-work-readable": {
    "minutes": 35,
    "thumbnail": {
      "file": "images/make-the-work-readable.jpg",
      "alt": "A worker holds a laptop beside rows of servers.",
      "sourceUrl": "https://github.com/openstax/osbooks-college-physics-bundle/blob/main/media/OSX_CP2e_Figure_22_00_01.jpg",
      "creator": "WOCinTech Chat/Flickr",
      "license": "OpenStax College Physics 2e, CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "explain",
        "prompt": "Write a 120-word account of a fictional or public project using problem, decision, evidence, and limitation. Underline any claim that still needs evidence.",
        "evidence": "Show the distinction developed in the lesson, identify your assumptions, and justify the proposed action."
      },
      {
        "kind": "apply",
        "prompt": "Rewrite the account for a different audience in 80 words. Add one specific question they could answer, then explain what you preserved and what you changed.",
        "evidence": "Revise the model when conditions change and explain a limitation rather than claiming certainty."
      }
    ]
  },
  "a-small-useful-return": {
    "minutes": 35,
    "thumbnail": {
      "file": "images/a-small-useful-return.jpg",
      "alt": "Black heat-sink fins cover a small green computer board.",
      "sourceUrl": "https://github.com/raspberrypi/documentation/blob/master/documentation/asciidoc/computers/compute-module/images/cm5-cooler.jpg",
      "creator": "Raspberry Pi Ltd",
      "license": "CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/); cropped and resized."
    },
    "activities": [
      {
        "kind": "explain",
        "prompt": "Draft a follow-up to the fictional workshop conversation in 90 words or fewer. Include context, a bounded offer, and an easy way to decline. Do not send it as part of this activity.",
        "evidence": "Show the distinction developed in the lesson, identify your assumptions, and justify the proposed action."
      },
      {
        "kind": "apply",
        "prompt": "Write three branches: accepted, no reply, and you lose capacity. For each, name a next action and stopping condition. Explain how your plan respects both people’s time.",
        "evidence": "Revise the model when conditions change and explain a limitation rather than claiming certainty."
      }
    ]
  },
  "a-mass-between-readings": {
    "minutes": 32,
    "activities": [
      {
        "kind": "derive",
        "prompt": "For the linear model λ(x)=1+x kg/m on a 2 m rod, calculate left and right estimates with four and eight equal pieces. Derive the gap 4/n kg for general n. Find the smallest positive integer n making that gap strictly less than 0.1 kg. Use paper and a calculator or the bench for arithmetic checks.",
        "evidence": "Sample locations and widths are explicit; the limiting argument follows from a bound, not a pattern alone."
      },
      {
        "kind": "transform",
        "prompt": "Rebuild the four-piece left sum in centimetres using μ(y)=0.01+0.0001y kg/cm on 0≤y≤200 cm. List the four density values, multiply by the correct width, and compare with your metre-based result. Explain what fails if you change the lengths but retain density numbers in kg/m without conversion.",
        "evidence": "A coordinate change preserves each mass contribution and total units."
      },
      {
        "kind": "construct",
        "prompt": "Draw the supplied triangular extra-density bump on top of the linear model. Compute its added mass and the new total. Explain why all three original scanner readings are unchanged. Propose one new reading that separates these two models, and state one uncertainty it would leave.",
        "evidence": "An exact result within a model is distinguished from what sparse observations establish."
      }
    ],
    "feedback": [
      "For n=4, L=3.5 kg and R=4.5 kg; for n=8, L=3.75 kg and R=4.25 kg. Subtraction telescopes to (2/n)(3−1)=4/n kg. The strict inequality 4/n<0.1 requires n>40, so n=41 is the smallest integer. These are model bounds, not bounds inferred solely from three measurements.",
      "The four left samples are y=0,50,100,150 cm, with densities 0.01,0.015,0.02,0.025 kg/cm. Their sum is 0.07 kg/cm; multiply by 50 cm to obtain 3.5 kg. Mixing centimetre widths with unconverted kg/m density numbers introduces a factor-of-100 error.",
      "The extra triangle contributes ½×1×2=1 kg, giving 5 kg total. Its value is zero at all three original sample positions. At x=0.5 m, the linear model predicts 1.5 kg/m and the bumped model 3.5 kg/m. That new observation separates these candidates but does not rule out every other density law."
    ]
  }
};
