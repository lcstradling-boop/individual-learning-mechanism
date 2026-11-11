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
  }
};
