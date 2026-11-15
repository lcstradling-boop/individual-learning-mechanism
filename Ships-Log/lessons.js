// Published lesson IDs are permanent. Append new lessons in introduction order.
const initialLessons = [
  {
    "id": "meter-at-rest",
    "topicId": "home-maintenance-repair",
    "title": "When the house is quiet, why is the meter moving?",
    "subtitle": "Read a water bill’s smallest useful clue in two numbers.",
    "centralQuestion": "How can a whole-house meter help you narrow down an unseen water loss?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "Two numbers at breakfast",
        "body": [
          "At seven, everyone is out of the shower. The kitchen tap is dry. Two hours later, the meter has advanced six gallons. You could walk the house looking for a puddle, but some of the most interesting places water goes are already connected to drains. Start by asking what else was using water between those readings. A scheduled sprinkler, an ice maker, and a housemate doing laundry all count."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "What the number includes",
        "body": [
          "A meter accumulates the volume that crosses one boundary. It knows nothing about which fixture took the water. Subtract the first reading from the second and divide by the elapsed time to get an average flow. Six gallons in two hours gives three gallons per hour. A steady trickle and a single six-gallon draw produce identical endpoints. Predicting 72 gallons tomorrow assumes the average persists for the entire day.",
          "Record the unit and the smallest readable increment before interpreting the digits. A utility bill in cubic feet and a meter display in gallons need a conversion. A display that advances only in whole gallons can stay still during a short observation even while a slow leak continues."
        ]
      },
      {
        "kind": "application",
        "heading": "Choose a quieter interval",
        "body": [
          "Suppose someone remembers the ice maker refilled overnight. That weakens the claim that all six gallons leaked, but tells you little about this particular morning. A stronger comparison uses a two-hour interval when everyone agrees to avoid water use and you can account for automatic appliances. Use the example readings if the meter serves several homes, sits in a pit, or is inaccessible. Leave utility equipment to the utility.",
          "In a second quiet interval the reading advances again. That is a reason to inspect accessible fixtures and ask the utility or property manager about unexplained use. It still leaves several possible paths. A toilet dye test changes the question by marking water in one particular tank."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "toilet-after-midnight",
        "relationship": "A meter registers all downstream use. A dye test labels one tank so you can locate a path hidden inside that total."
      }
    ],
    "sources": [
      {
        "label": "EPA WaterSense • Home maintenance",
        "url": "https://www.epa.gov/watersense/home-maintenance",
        "accessed": "2026-11-11",
        "note": "Water-meter observations, toilet dye testing and overflow inspection."
      },
      {
        "label": "EPA WaterSense • Fix a Leak Week",
        "url": "https://www.epa.gov/watersense/fix-leak-week",
        "accessed": "2026-11-11",
        "note": "Two-hour quiet interval and interpreting a changing meter."
      }
    ]
  },
  {
    "id": "toilet-after-midnight",
    "topicId": "home-maintenance-repair",
    "title": "The toilet that refills itself at midnight",
    "subtitle": "Follow one tank of water around a feedback loop.",
    "centralQuestion": "What can a brief refill, a waterline, and a drop of dye each tell you?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "Listen between flushes",
        "body": [
          "Imagine reading late at night. The toilet runs for fifteen seconds, stops, then does it again half an hour later. Nobody flushed. The short burst tells you the fill valve admitted water. Replacing that valve immediately would mean treating the component you heard as the component that failed. First ask what the valve was responding to."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Draw the two paths",
        "body": [
          "In a common gravity toilet, the float rises with the tank water and shuts off the inlet near a set level. A flush briefly opens a seal at the bottom. The tank empties into the bowl, the seal closes, and the inlet replaces the lost water. The overflow tube gives excess water another route to the bowl if the level climbs too high.",
          "Now imagine a slow seep past the bottom seal. The tank level falls until the float calls for more water. The brief hiss you hear is a normal response to an abnormal loss. Compare that with an inlet that keeps feeding a full tank. Look at the top of the overflow tube. Water spilling over its rim changes where you would direct attention."
        ]
      },
      {
        "kind": "application",
        "heading": "Watch where the water goes",
        "body": [
          "For an accessible standard tank at rest, EPA suggests putting a few drops of food coloring in the tank and waiting ten minutes without flushing. Color appearing in the bowl establishes a path between them. Flush promptly afterward to avoid staining. A ceramic lid is heavy and brittle. Use the supplied case if the tank is concealed, unfamiliar, or the lid cannot be handled comfortably.",
          "Case A has color in the bowl, a waterline below the overflow rim, and periodic short refills. Case B has color in the bowl and water visibly spilling over the rim. The dye result is shared. Only the second observation distinguishes a likely route. If water reaches the floor or a valve needs disassembly, report the observations to the person responsible for repairs."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "oil-level-and-pressure",
        "relationship": "Both systems can contain enough fluid while delivering it through an unintended path. The tank exposes that path to a dye test, while engine pressure requires a different measurement."
      }
    ],
    "sources": [
      {
        "label": "EPA WaterSense • Home maintenance",
        "url": "https://www.epa.gov/watersense/home-maintenance",
        "accessed": "2026-11-11",
        "note": "Water-meter observations, toilet dye testing and overflow inspection."
      }
    ]
  },
  {
    "id": "water-on-the-glass",
    "topicId": "home-maintenance-repair",
    "title": "Which side of the window is wet?",
    "subtitle": "A kitchen window can register a change in the air before you feel it.",
    "centralQuestion": "How do the location and timing of droplets help distinguish condensation from incoming rain?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "Read the glass",
        "body": [
          "Pasta water is boiling on a January evening. Beads form along the lower edge of the kitchen window. Yesterday there was water on that sill after a storm. The same wet sill could justify two very different repairs. From indoors, wipe a small accessible patch of the glass. Record where the moisture actually sits, when it appeared, and what was happening in the room."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "What the cold surface changes",
        "body": [
          "Air in contact with cold glass cools. At its dew point it reaches saturation, and further cooling can leave liquid water on the surface. Boiling adds water vapor and can raise the dew point. A pane cold enough to condense water after dinner might have been dry at the very same temperature before dinner. The glass can stay intact throughout.",
          "Think of a cold glass of water on a summer table. Droplets on its outside can grow while its water level stays unchanged. With a window you can use that distinction between water crossing a barrier and water changing phase beside it. Moisture trapped between sealed panes is a third location and calls for a different inspection."
        ]
      },
      {
        "kind": "application",
        "heading": "Change one condition",
        "body": [
          "In the kitchen case, moisture wipes off the room side and reappears during cooking on several windows. Record what happens during a comparable meal with an exhaust fan that vents outdoors. Less condensation supports a role for indoor humidity. Weather and pane temperature can also change between meals, so the comparison has limits.",
          "Now change the observation. A single upper frame gets wet after wind-driven rain, even when nobody cooks, while the room-side glass stays dry. Look for the first accessible wet point and report the timing and wind direction. Persistent damp materials or a recurring leak deserve prompt attention. Dry accessible wet surfaces and leave concealed cavities and exterior work to maintenance staff."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "arc-on-the-windshield",
        "relationship": "Both cases use the surface carrying the water to locate its source. A windshield also has an exterior wiping mechanism you can test."
      }
    ],
    "sources": [
      {
        "label": "EPA • Controlling moisture in your home",
        "url": "https://www.epa.gov/mold/what-are-main-ways-control-moisture-your-home",
        "accessed": "2026-11-11",
        "note": "Indoor water vapor, cold surfaces and moisture control."
      }
    ]
  },
  {
    "id": "gap-at-the-door",
    "topicId": "home-maintenance-repair",
    "title": "Why the draft starts at the latch",
    "subtitle": "A door can look closed and still leave an air path.",
    "centralQuestion": "How can you distinguish a leaky moving joint from a cold surface?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "Find the seam",
        "body": [
          "On a windy evening your ankle feels cold beside the front door. A fingertip near a cold panel feels chilly even when the door seals well. Inspect the perimeter with the door closed normally. Look for daylight, torn weatherstripping, or a flattened strip that stops short of a corner. Notice which surfaces move when the door opens."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "A gap needs a push",
        "body": [
          "Air flows through a gap when pressure differs across it. Wind changes that pressure across the building. A still afternoon can hide the very same gap that announces itself during a gust. A cold solid panel can also cool the air on the room side. That air can descend without outdoor air passing through the panel. A hand near the floor may feel either effect.",
          "On an ordinary accessible exterior door, a narrow strip of paper closed gently in several places can compare contact around the seal. Easy withdrawal at one corner gives a location to examine. Friction also depends on the seal material, so the paper alone cannot measure leakage. Keep fingers clear of the closing edge and preserve normal latching."
        ]
      },
      {
        "kind": "application",
        "heading": "Repair the right interface",
        "body": [
          "Suppose the paper drags at the hinge side and slips free beside the latch, exactly where a short piece of seal has come loose. That agreement makes a local defect plausible. A door that visibly sags or fails to latch calls for checking the fit first. Thick new material could make it harder to close.",
          "Weatherstripping belongs where two surfaces move against each other. A stationary crack between trim and wall is a different joint. A deliberately open vent serves a different function again. Leave fire-rated doors, ventilation openings and shared-building changes to the responsible maintenance staff. After a permitted repair, repeat the comparison under similar conditions and confirm the door closes, latches and opens freely."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "trace-the-display",
        "relationship": "Testing contact around a seal narrows a physical path. Bypassing a display dock narrows a signal path, where compatibility can also change during the test."
      }
    ],
    "sources": [
      {
        "label": "U.S. Department of Energy • Guide to Air Sealing",
        "url": "https://www.energy.gov/sites/prod/files/guide_to_air_sealing.pdf",
        "accessed": "2026-11-11",
        "note": "Air leakage, ventilation and sealing moving joints."
      }
    ]
  },
  {
    "id": "four-cold-readings",
    "topicId": "auto-maintenance-repair",
    "title": "Four tires on a cold morning",
    "subtitle": "A pressure reading means more when you know when, where, and against what it was measured.",
    "centralQuestion": "Which comparisons help you distinguish a cold morning from a tire losing air?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "Before the first drive",
        "body": [
          "A tire-pressure light comes on after a cold night. Yesterday the tires looked fine. Park on level ground away from traffic and read the vehicle’s tire-information placard, usually in the driver’s door opening. Record the front and rear cold targets separately. The number molded on a tire sidewall describes a tire limit. The vehicle maker selects the operating pressure for this vehicle’s loads and tire configuration."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Make the readings comparable",
        "body": [
          "Use a gauge on cold tires, generally after the vehicle has been parked at least three hours. Press the gauge squarely onto the valve and repeat an unexpected reading. A hiss that continues while the gauge sits crooked means the seal is poor. Record each wheel position and replace the caps. The paper exercise below uses a fictional placard and needs no car.",
          "Gas pressure depends on the quantity of air, its temperature and its volume. Cooling a sealed tire usually lowers its pressure. A small puncture can lower it too. One gauge reading combines those effects. Measurements made with the same gauge under comparable cold conditions let a difference between wheels carry more information. A warm tire normally reads higher after driving. Bleeding a warm tire down to its cold target can leave it low later."
        ]
      },
      {
        "kind": "application",
        "heading": "Follow the outlier",
        "body": [
          "Our fictional placard specifies 35 psi front and 33 rear. The cold readings, left to right, are 32 and 32 in front, 30 and 30 in back. Every tire is three psi below its own target. That pattern fits a shared change, though the readings alone cannot prove the weather caused it. Now suppose all four were set to their targets and the next comparable morning the readings are 35, 28, 33, 33. One tire has separated from the group. A technician should check for a leak.",
          "On an actual car, follow its manual for inflation and alerts. A visibly flat tire, bulge, or rapid loss calls for assistance before driving. A dashboard warning is a prompt to measure. A warning that goes out cannot certify the condition of the tread or sidewalls."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "tread-remembers",
        "relationship": "Cold pressure describes the tire today. A tread profile records the effects of many earlier drives and can reveal a problem even after pressure has been corrected."
      }
    ],
    "sources": [
      {
        "label": "NHTSA • Summer driving tips",
        "url": "https://www.nhtsa.gov/summer-driving-tips",
        "accessed": "2026-11-11",
        "note": "Cold tire measurements, tread inspection, fluids and windshield wipers."
      }
    ]
  },
  {
    "id": "tread-remembers",
    "topicId": "auto-maintenance-repair",
    "title": "The tread remembers where the load went",
    "subtitle": "Pressure is a snapshot. The rubber carries evidence from many miles.",
    "centralQuestion": "What can the pattern across a tire tell you about its history?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "Read across the width",
        "body": [
          "A used car has four tires with respectable-looking grooves down the middle. On the right front, the inner shoulder looks almost smooth. A single center reading would miss the part that may govern the service decision. Inspect accessible tread on a stationary parked vehicle. If seeing the inner edge would require crawling under the car or lifting it, leave that inspection to a tire shop."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "How a pattern accumulates",
        "body": [
          "Rubber wears as the rolling contact patch deforms and slips against the road. Inflation affects the contact shape. Alignment changes the angles at which a wheel rolls, so a tire may scrub even while the car travels straight. Wear can also reflect rotation history, driving conditions and suspension faults. The tire is a record of past conditions. Correct pressure today cannot erase yesterday’s wear or identify its cause.",
          "Compare positions across one tread, around its circumference where safely visible, and across wheels. A shallow spot repeated at the same shoulder tells a different story from a narrow cut at one point. Use a tread-depth gauge in the main grooves, away from raised wear bars. The wear bars are references. When the surrounding tread is flush with them, that region has reached the wear indicator."
        ]
      },
      {
        "kind": "application",
        "heading": "Write what a technician can use",
        "body": [
          "Consider a fictional inspection in thirty-seconds of an inch. Across the left front, inside to outside, you record 6, 6, 5. On the right front you get 2, 6, 6. The average of the second set is nearly five. Yet its inner groove has reached the U.S. replacement threshold of 2/32 inch. Averaging conceals the local problem. Arrange tire service before driving on it and ask for an inspection of the wear cause. Exposed cords or a bulge also warrant assistance.",
          "Suppose alignment is corrected. The worn shoulder stays worn. Verification therefore has two time scales. The shop can measure alignment immediately, while the wear pattern on a serviceable replacement develops over subsequent mileage."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "four-cold-readings",
        "relationship": "Compare current cold pressure with historic wear before attributing a worn shoulder to inflation."
      }
    ],
    "sources": [
      {
        "label": "NHTSA • Summer driving tips",
        "url": "https://www.nhtsa.gov/summer-driving-tips",
        "accessed": "2026-11-11",
        "note": "Cold tire measurements, tread inspection, fluids and windshield wipers."
      },
      {
        "label": "Michelin • Tread problems",
        "url": "https://www.michelinman.com/auto/auto-tips-and-advice/tire-damage/tread-problems",
        "accessed": "2026-11-11",
        "note": "Patterns of wear and the limits of visual diagnosis."
      }
    ]
  },
  {
    "id": "oil-level-and-pressure",
    "topicId": "auto-maintenance-repair",
    "title": "Oil on the dipstick, a warning on the dash",
    "subtitle": "An engine can contain oil and still lose lubrication.",
    "centralQuestion": "Why can a normal oil level coexist with an urgent oil-pressure warning?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "Two observations on the same trip",
        "body": [
          "Picture two calls from a driver. In the first, the car is parked for a routine level check. In the second, the red oil-pressure warning appears while the engine is running. These calls demand different responses. For an oil-pressure warning while driving, pull over as soon as safely possible, switch off the engine and follow the manual’s emergency guidance. Arrange assistance. Running the engine to see whether the warning clears risks damage."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Inventory and delivery",
        "body": [
          "The oil pan stores a supply. A pump draws oil through a pickup and sends it through passages to moving components. The system needs both enough oil and a functioning delivery path. A dipstick samples the depth of the stored oil under specified conditions. A pressure warning monitors a different quantity at a particular point in the circuit. A full reservoir and a failed pump can coexist. So can a genuine warning and an apparently quiet engine.",
          "A routine level check needs a repeatable reference. On a vehicle with a dipstick, use the manual’s procedure for level ground, engine state and wait time. For a conventional wipe-and-reinsert procedure, seat the dipstick fully before reading it. A slope changes where the oil surface crosses the stick. Oil still draining from upper passages changes the reading too. Some vehicles provide an electronic level procedure. Their manual defines the measurement."
        ]
      },
      {
        "kind": "application",
        "heading": "What changes the decision?",
        "body": [
          "Case A is a parked car with a first reading below minimum on a sloped driveway. No warning appeared. A correctly repeated reading under the prescribed conditions carries more weight. If adding oil is warranted, the vehicle manual specifies the grade and method. Overfilling can cause problems too. Case B had a red pressure warning on the road. A normal level found afterward does not resolve that event. The pressure and its sensing circuit need a qualified diagnosis before running again.",
          "A maintenance reminder about an oil change is a third signal. Identify its exact icon or message in the manual. Similar vocabulary can refer to a scheduled service, a quantity measurement or a potentially urgent delivery failure."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "toilet-after-midnight",
        "relationship": "The toilet’s visible fill and outlet paths provide a simple way to reason about stored fluid and its movement before returning to the hidden oil circuit."
      }
    ],
    "sources": [
      {
        "label": "NHTSA • Summer driving tips",
        "url": "https://www.nhtsa.gov/summer-driving-tips",
        "accessed": "2026-11-11",
        "note": "Cold tire measurements, tread inspection, fluids and windshield wipers."
      },
      {
        "label": "Ford • F-150 owner’s manual (2020 example)",
        "url": "https://www.fordservicecontent.com/Ford_Content/Catalog/owner_information/2020-Ford-F-150-Owners-Manual-version3_om_EN-US_04_2020.pdf",
        "accessed": "2026-11-11",
        "note": "Model-specific example of warning lamps, oil checks and wiper care. Consult the manual for the actual vehicle."
      }
    ]
  },
  {
    "id": "arc-on-the-windshield",
    "topicId": "auto-maintenance-repair",
    "title": "The stripe a wiper leaves behind",
    "subtitle": "A streak on the glass records where blade and windshield met.",
    "centralQuestion": "How can the shape and timing of a smear guide your next parked inspection?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A mark that moves with the blade",
        "body": [
          "The first wet morning of fall, a wiper leaves a narrow arc in exactly the same place on each sweep. Tomorrow’s forecast says more rain. Investigate while parked. If visibility becomes inadequate on the road, slow appropriately and find a safe place to stop. A moving car in rain is a poor place to compare explanations."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Read the geometry",
        "body": [
          "A blade sweeps through an angle around a pivot. One damaged or dirty spot on its edge stays at roughly the same distance from that pivot, so it can trace a curved stripe across the glass. A fleck stuck to the windshield stays in one place as the blade passes. A greasy film over a broad area can spread into a haze. Each pattern suggests a different first inspection, though none identifies a specific replacement part by itself.",
          "There is another surface in the system. If the view turns milky and the blade makes no difference, interior condensation is possible. The defog setting changes conditions on the cabin side. Washer fluid and a wiper act on the outside. Which intervention changes the view helps locate the obscuring layer."
        ]
      },
      {
        "kind": "application",
        "heading": "Inspect and verify",
        "body": [
          "With the vehicle parked, turn off the wipers and automatic rain-sensing mode before approaching the blades. Follow the owner’s manual for service position and cleaning materials. Some arms strike the hood if lifted from their parked position. Look for debris, a split wiping edge or a section that no longer contacts the glass. Keep the spring-loaded arm supported and hands clear during operation.",
          "Imagine that cleaning the exterior glass and the intact blade clears the broad haze but leaves the narrow arc. The first result shows that contamination contributed. The remaining arc points toward a local contact problem. Once everything is back in place and people are clear, compare another wet sweep while parked. Resolve impaired visibility before driving."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "water-on-the-glass",
        "relationship": "Interior fog and a wet exterior can look alike from the driver’s seat. The window lesson explains why water can appear on the cabin side."
      }
    ],
    "sources": [
      {
        "label": "NHTSA • Summer driving tips",
        "url": "https://www.nhtsa.gov/summer-driving-tips",
        "accessed": "2026-11-11",
        "note": "Cold tire measurements, tread inspection, fluids and windshield wipers."
      },
      {
        "label": "Ford • F-150 owner’s manual (2020 example)",
        "url": "https://www.fordservicecontent.com/Ford_Content/Catalog/owner_information/2020-Ford-F-150-Owners-Manual-version3_om_EN-US_04_2020.pdf",
        "accessed": "2026-11-11",
        "note": "Model-specific example of warning lamps, oil checks and wiper care. Consult the manual for the actual vehicle."
      }
    ]
  },
  {
    "id": "where-the-space-went",
    "topicId": "computer-maintenance",
    "title": "Where did the last gigabyte go?",
    "subtitle": "Read the filesystem boundary before deciding which files are taking up space.",
    "centralQuestion": "Why can a nearly full Linux filesystem coexist with a small home directory?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A save fails in Ubuntu",
        "body": [
          "The editor refuses to save a small Python file. The virtual machine reports one gigabyte free. Your laptop still has eighty. Both statements can be true. A program in the guest asks its filesystem for space. Free blocks on the host do not automatically become allocatable blocks inside the guest. Start at the directory where the write actually failed."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Ask two different questions",
        "body": [
          "On GNU/Linux, df -h . reports space on the mounted filesystem containing the current directory. The dot matters. In a project on a separate mounted volume it targets that volume. du -h --max-depth=1 . estimates the disk space attributed to the directory tree you can traverse. One command queries a filesystem, while the other walks names and totals usage. Neither command needs to change your files.",
          "Suppose df reports a 40 GiB filesystem, 37 GiB used and 1 GiB available. Used plus available need not equal total because of filesystem reservations and reporting units. From your home directory, du reports 6 GiB. Concluding that 31 GiB has vanished assumes your home directory contains everything counted by df. System directories on the same filesystem are an immediate counterexample."
        ]
      },
      {
        "kind": "application",
        "heading": "Narrow the discrepancy",
        "body": [
          "A Downloads directory totals 4 GiB. An archive there sounds like a candidate until you notice the failing write targeted a mounted project volume. Removing a download from the home filesystem would free zero blocks on that project volume. Compare df -h . from each location before deciding what deserves attention.",
          "There are further complications. A process can keep an unlinked file open on Linux. Its blocks remain allocated until the last open reference closes, while a directory walk can no longer find its former name. Permission errors can also leave a directory total incomplete. Neither possibility follows from a small home directory alone. Preserve the exact error and the command output. If important data is at risk, protect it before making cleanup or resizing changes."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "meter-at-rest",
        "relationship": "The meter totals flow across a property boundary over time. A filesystem reports occupied space at an instant. In both cases, locating the boundary tells you what the total can include."
      }
    ],
    "sources": [
      {
        "label": "GNU Coreutils • df",
        "url": "https://www.gnu.org/software/coreutils/manual/html_node/df-invocation.html",
        "accessed": "2026-11-11",
        "note": "Filesystem usage for the file or directory supplied."
      },
      {
        "label": "GNU Coreutils • du",
        "url": "https://www.gnu.org/software/coreutils/manual/html_node/du-invocation.html",
        "accessed": "2026-11-11",
        "note": "Storage attributed to files and directory trees."
      }
    ]
  },
  {
    "id": "cpu-between-samples",
    "topicId": "computer-maintenance",
    "title": "The process at the top of top",
    "subtitle": "A busy process can be doing exactly what you asked.",
    "centralQuestion": "How can repeated observations separate ordinary CPU demand from a likely cause of slowdown?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "Catch it in the act",
        "body": [
          "You launch a build in an Ubuntu VM. The fan on the host gets loud and typing in the guest starts to lag. One look at top shows a compiler near the top of the list. Killing that process would remove your best opportunity to learn whether it was making progress. Write down the task, the process name, and what you mean by slow. A late keystroke and a long but responsive build are different symptoms."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Percent of what, over when?",
        "body": [
          "After its first refresh, the CPU column in Linux top reflects CPU time consumed during a recent sampling interval. A process that was busy throughout a two-second interval can look identical to one that has been busy all afternoon. Under the usual per-core display, 100 percent corresponds roughly to one logical CPU fully occupied. A multithreaded process can exceed 100 percent. The guest sees the virtual CPUs assigned to it. The host still schedules those virtual CPUs alongside its own work.",
          "Compare three moments in a hypothetical two-vCPU guest. Before the build, the compiler is absent and typing is responsive. During the build it reads 175, 182 and 166 percent across successive intervals while object files appear. After the build exits, typing recovers. The series supports contention during a progressing task. It gives little reason to label the compiler defective."
        ]
      },
      {
        "kind": "application",
        "heading": "Try to break the explanation",
        "body": [
          "On a second run typing keeps lagging after the compiler exits. Its past CPU use cannot account for ongoing demand by that process. Inspect present workloads on the guest and host, memory pressure, and whether the affected operation waits on storage. If only one editor lags while a terminal responds promptly, narrow the question to that application.",
          "A small reversible comparison is more informative than a list of suspects. In a later planned build, use the build tool’s documented job setting to lower parallelism while keeping the project and guest allocation comparable. Predict what might happen to typing and total build time first. Use the supplied traces for this lesson. A successful investigation needs no process termination."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "four-cold-readings",
        "relationship": "Both measurements depend on when you take them. A cold tire reading samples a state, while a CPU percentage summarizes activity over an interval."
      }
    ],
    "sources": [
      {
        "label": "procps-ng • top manual",
        "url": "https://man7.org/linux/man-pages/man1/top.1.html",
        "accessed": "2026-11-11",
        "note": "Sampling intervals, CPU percentages and per-CPU display conventions."
      }
    ]
  },
  {
    "id": "restore-one-file",
    "topicId": "computer-maintenance",
    "title": "Recover yesterday’s sentence",
    "subtitle": "A backup earns your trust when it gives you the intended version back.",
    "centralQuestion": "What would count as evidence that a particular piece of work is recoverable?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The file is there. The paragraph is gone.",
        "body": [
          "Imagine opening a lab report on Thursday morning. The document is healthy and opens normally. Wednesday afternoon’s revision removed a paragraph you now need. Your phone shows the same shortened report. Synchronization succeeded, including the edit you wish it had missed. Write the recovery target as a sentence before touching anything. You need one document as it existed before Wednesday afternoon, and you want to keep this morning’s work."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Place the edit between two snapshots",
        "body": [
          "Suppose a backup recorded the document Tuesday at 9 p.m., Wednesday at noon and Wednesday at 8 p.m. The paragraph was written Wednesday at 10 a.m. and removed at 3 p.m. Only the noon copy can contain it under those assumptions. A recovery point is a captured state you can return to. An hourly schedule describes an intention. A completed capture, coverage of the folder and retention of the needed version determine whether that intention helps today.",
          "An independent copy addresses another failure. A local version on the same drive might survive a mistaken edit and disappear with a failed drive. A separate backup disk might survive that failure and still miss a folder excluded from backups. Ask which event you expect the copy to survive, where it lives and whether you can actually read it."
        ]
      },
      {
        "kind": "application",
        "heading": "Rehearse with disposable content",
        "body": [
          "On paper, write a tiny file with a unique line for each of three versions. Give the versions timestamps and apply the capture schedule above. Choose a recovery point, specify a separate recovery destination, and compare the recovered content with the expected line. Opening the file tests readability. Checking the line tests whether you recovered the intended version. Verify that the current version also survives.",
          "For a future live rehearsal, use a disposable document and the restore instructions for your backup tool. Time Machine, for instance, lets you browse previous backups. Its normal restore destination is the item’s original location. Preserve the current file separately before using any workflow that might replace it. A successful one-file rehearsal supplies evidence for that file and version. A full-system recovery has additional dependencies."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "where-the-space-went",
        "relationship": "Locating a file on a volume helps identify which failures could remove both the original and its backup. Version recovery adds a time requirement."
      }
    ],
    "sources": [
      {
        "label": "Apple • Restore items backed up with Time Machine",
        "url": "https://support.apple.com/guide/mac-help/mh11422/mac",
        "accessed": "2026-11-11",
        "note": "Selecting a prior backup and the original restore location."
      }
    ]
  },
  {
    "id": "trace-the-display",
    "topicId": "computer-maintenance",
    "title": "The monitor can draw its own menu",
    "subtitle": "A screen with no picture can still tell you which parts work.",
    "centralQuestion": "How far along a display connection can you trace a signal using only what you can see?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "Start at the far end",
        "body": [
          "An external monitor connected to a laptop through a dock shows a black rectangle. Press the monitor’s own menu button. Its input menu appears, bright and legible. You have learned something before touching a cable. The monitor has enough power and display function to draw its own menu. That picture was generated inside the monitor. It never traveled through the laptop, dock or video cable."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Follow the signal",
        "body": [
          "For the desktop to appear, the computer must provide a supported display signal, the port and any dock or adapter must carry it, the cable must support the chosen mode, and the monitor must listen to the input being used. A USB-C plug describes the connector shape. The capabilities of the port, cable and adapter determine whether a particular video path works. A cable that charges a device has demonstrated only part of what you need.",
          "Think of a shell pipeline. Seeing output at an intermediate stage establishes that some upstream work succeeded. A monitor menu is more like running the last stage with its own test input. It confirms an output capability while leaving the external signal path open to investigation."
        ]
      },
      {
        "kind": "application",
        "heading": "Bypass a component, then say exactly what changed",
        "body": [
          "The monitor menu says HDMI 2 while the cable enters HDMI 1. Selecting HDMI 1 brings up the desktop. That is a strong local test. Now imagine both were already on HDMI 1. A compatible direct laptop-to-monitor connection works while the docked setup fails at the same resolution. The docked path deserves attention. If the direct test also used a different cable or port, both changed along with the dock. Calling the dock defective would outrun the evidence.",
          "A second puzzle is a desktop visible at 60 Hz but absent at a higher refresh rate. The successful mode proves the path can carry some video. Higher modes demand more of the link. Check the model-specific limits of each element and retest a supported mode. All work in this case is external. Internal monitor power circuitry belongs with a qualified service technician."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "gap-at-the-door",
        "relationship": "A paper test locates weak contact at a particular seam. A display substitution can isolate a link too, provided you track every component that changed."
      }
    ],
    "sources": [
      {
        "label": "Apple • If your external display is dark or low resolution",
        "url": "https://support.apple.com/en-us/102501",
        "accessed": "2026-11-11",
        "note": "Supported video modes, cable requirements and bypassing a hub."
      }
    ]
  },
  {
    "id": "who-governs",
    "topicId": "us-governance",
    "title": "Who actually governs the United States?",
    "subtitle": "Follow a glass of drinking water from the kitchen tap to the officials who set and enforce its standards.",
    "centralQuestion": "Who can change the standard, enforce it, or fix the equipment?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A single tap has several governments behind it.",
        "body": [
          "A town’s water system reports that a sample exceeded a contaminant limit. At the meeting that night, a resident asks the mayor to change the limit. Another asks the mayor to repair a treatment unit. Those requests sound equally local. They require different powers. Start with the verb in each request."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Congress can assign different verbs to different institutions.",
        "body": [
          "Under the Safe Drinking Water Act, Congress gave EPA responsibility for national drinking-water standards. A qualifying state or tribe can obtain primary enforcement responsibility, called primacy. Among other requirements, it must adopt rules at least as stringent as the federal ones and have enforcement capacity. A public water system monitors and treats the water. Its operator may be a city, a district or a private entity. The tap alone tells you remarkably little about the payroll."
        ]
      },
      {
        "kind": "case",
        "heading": "An address is evidence about geography. An enforcement notice is evidence about power.",
        "body": [
          "Imagine the utility is city-owned and the state has primacy. To ask what the national limit means, find the EPA rule. To discover what the state required this utility to do, obtain the notice. To learn why replacement pumps were delayed, inspect the utility’s procurement records. None of those records by itself establishes what was in a particular glass on Tuesday. That takes measurements tied to a place and time."
        ]
      },
      {
        "kind": "comparison",
        "heading": "Federalism changes who has to build administrative capacity.",
        "body": [
          "Article 83 of Germany’s Basic Law makes administration of federal laws by the Länder, its constituent states, the general rule subject to constitutional exceptions. In the American water example, state primacy depends on meeting conditions in a particular federal program. Both systems can put a regional official at the counter. The route by which the official acquired that job differs."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "from-statute-to-rule",
        "relationship": "Trace how the agency first acquires the standard that the state later enforces."
      }
    ],
    "sources": [
      {
        "label": "EPA · Primary enforcement responsibility",
        "url": "https://www.epa.gov/dwreginfo/primacy-enforcement-responsibility-public-water-systems",
        "accessed": "2026-11-14",
        "note": "Criteria for a state or tribe to administer public water system standards."
      },
      {
        "label": "German Basic Law · English translation",
        "url": "https://www.gesetze-im-internet.de/englisch_gg/englisch_gg.html",
        "accessed": "2026-11-14",
        "note": "Articles 63, 65, 67, 68 and 83 describe executive selection, ministerial leadership, confidence and administration by the Länder."
      }
    ]
  },
  {
    "id": "when-a-bill-binds",
    "topicId": "us-governance",
    "title": "What makes a law a law?",
    "subtitle": "Two almost identical pages can carry very different legal weight.",
    "centralQuestion": "What record establishes that a proposal changed federal law?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A bill can say exactly what the law will say and still bind nobody.",
        "body": [
          "Open the enrolled version of S. 475 and Public Law 117–17. Both name Juneteenth National Independence Day. Both insert June 19 into the same list. If you copied the operative sentence onto two blank sheets, you could lose the most important difference between them. Recover it by asking what happened to each document."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "A vote advances a particular text.",
        "body": [
          "Article I, section 7 requires agreement by both houses and presentment to the president for an ordinary bill. If the Senate amends a House bill, counting one vote in each chamber gives the wrong answer until the chambers agree on identical language. Enrollment records that agreement. Signature can complete enactment. A returned veto can be overridden by two-thirds votes in each chamber. A bill can also become law without signature after ten days, Sundays excluded, unless adjournment prevents its return."
        ]
      },
      {
        "kind": "case",
        "heading": "One line can change a standing rule.",
        "body": [
          "The enrolled bill tells you what Congress sent. The public law records approval on June 17, 2021. Section 2 gives an editing instruction for title 5, section 6103(a) of the U.S. Code. Following that instruction explains how later readers encounter June 19 alongside other federal holidays. Look for the covered institution before inferring consequences. This amendment alone cannot tell you whether a private restaurant closed or paid its cooks extra that Saturday."
        ]
      },
      {
        "kind": "application",
        "heading": "Dates answer different questions.",
        "body": [
          "A hypothetical bill passes the House in March, becomes law in June and directs an agency to start accepting applications in October. In July a constituent can truthfully say that the program exists. A clerk can truthfully say applications have yet to open. To evaluate either claim, retrieve the enacted text and its effective or implementation provisions. A press release is admirably efficient at leaving out the boring date you needed."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "permission-to-spend",
        "relationship": "Enactment establishes what Congress adopted. The next question is whether those words supply money."
      }
    ],
    "sources": [
      {
        "label": "National Archives · Constitution transcript",
        "url": "https://www.archives.gov/founding-docs/constitution-transcript",
        "accessed": "2026-11-14",
        "note": "Read the named article and section alongside the example."
      },
      {
        "label": "GPO · Enrolled S. 475",
        "url": "https://www.govinfo.gov/app/details/BILLS-117s475enr",
        "accessed": "2026-11-14",
        "note": "The authenticated bill agreed to by both chambers."
      },
      {
        "label": "GPO · Public Law 117–17",
        "url": "https://www.govinfo.gov/content/pkg/PLAW-117publ17/html/PLAW-117publ17.htm",
        "accessed": "2026-11-14",
        "note": "Section 2 identifies the exact insertion into the federal holiday statute."
      }
    ]
  },
  {
    "id": "which-court",
    "topicId": "us-governance",
    "title": "Why does the United States have so many courts?",
    "subtitle": "A missing shipment and a changed address expose the logic of jurisdiction.",
    "centralQuestion": "What gives a particular court power to hear this dispute?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The price of a broken promise can change the courthouse door.",
        "body": [
          "Two Illinois residents sign a contract. One alleges the other failed to deliver a machine worth $90,000. Assume the parties are individuals, the claim arises solely under state law, and nothing else supplies federal jurisdiction. The size of the loss matters to them. Standing alone, it supplies no federal forum. State trial courts routinely decide contract disputes."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Jurisdiction comes before deciding who is right.",
        "body": [
          "Change one fact. The buyer is an Illinois citizen and the seller a Wisconsin citizen. In this simple two-party case, ordinary diversity jurisdiction under 28 U.S.C. § 1332 can supply a federal forum if the amount in controversy exceeds $75,000, excluding interest and costs. Citizenship for individuals turns on domicile. Mailing a demand letter from a hotel in Madison accomplishes less constitutional engineering than one might hope. State court may still be available. A separate basis for federal jurisdiction is a claim arising under federal law."
        ]
      },
      {
        "kind": "case",
        "heading": "An appeal asks what went wrong below.",
        "body": [
          "Assume the federal district court can hear the dispute. The trial court develops the record, resolves admissibility questions and, where appropriate, puts contested facts to a jury. The losing party appeals a disputed legal interpretation to the regional court of appeals. Appellate judges work from the record and apply the standard of review appropriate to the alleged error. A second jury does not hear the witnesses again. Ordinary state appeals use the state hierarchy. Certain federal questions from a final state judgment can reach the U.S. Supreme Court under separate conditions."
        ]
      },
      {
        "kind": "conduct",
        "heading": "A court can have jurisdiction while a particular judge must step aside.",
        "body": [
          "Suppose the federal trial judge previously served as a lawyer in this very matter. Section 455 addresses disqualification, including that specific situation and circumstances in which impartiality might reasonably be questioned. Reassigning a judge addresses who may decide. Dismissing for lack of subject-matter jurisdiction addresses whether this court may decide. Neither ruling tells the buyer what the missing machine was worth."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "when-precedent-binds",
        "relationship": "Once you locate the deciding court, you can identify which earlier decisions bind it."
      }
    ],
    "sources": [
      {
        "label": "U.S. Courts · Court role and structure",
        "url": "https://www.uscourts.gov/about-federal-courts/court-role-and-structure",
        "accessed": "2026-11-14",
        "note": "Trial and appellate functions, federal jurisdiction, and the separate state system."
      },
      {
        "label": "28 U.S.C. § 1332 · Diversity jurisdiction",
        "url": "https://www.law.cornell.edu/uscode/text/28/1332",
        "accessed": "2026-11-14",
        "note": "Subsection (a) gives the ordinary amount and citizenship requirements."
      },
      {
        "label": "28 U.S.C. § 455 · Judicial disqualification",
        "url": "https://www.law.cornell.edu/uscode/text/28/455",
        "accessed": "2026-11-14",
        "note": "Compare the appearance standard in (a) with specific grounds in (b)."
      }
    ]
  },
  {
    "id": "when-precedent-binds",
    "topicId": "us-governance",
    "title": "How does a judicial decision become precedent?",
    "subtitle": "Read a phone-search opinion tightly enough to tell which question the next judge still has to answer.",
    "centralQuestion": "Which part of an earlier decision controls a later dispute?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "Winning a case and making a rule are different achievements.",
        "body": [
          "A judgment settles the case before the court. A holding supplies a legal proposition necessary to that result. An opinion can also offer illustrations, warnings and observations that reach beyond what the court had to decide. Lawyers call such observations dicta. To find the holding, reconstruct the legal question, the facts that mattered and the reason the majority gave for the judgment. Sentence highlighting alone is an optimistic litigation strategy."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "The court that spoke matters.",
        "body": [
          "Vertical precedent binds lower courts on questions governed by a higher court in their hierarchy. A published federal circuit holding ordinarily binds district courts in that circuit on the federal issue decided. A sister circuit’s analysis can persuade. Horizontal stare decisis asks how the deciding court treats its own earlier decisions. Within the Supreme Court, briefing, argument and private conference lead to votes and circulated drafts. A concurrence can agree with the judgment through different reasoning. A dissent can influence a future court while leaving today’s judgment intact."
        ]
      },
      {
        "kind": "case",
        "heading": "A phone in a pocket changed what an old search power could reach.",
        "body": [
          "In Riley v. California (2014), the Supreme Court considered whether the power to search incident to arrest generally allowed police to examine digital information on a seized cellphone. The Court distinguished the physical device from its digital contents and explained why the established concerns about weapons and evidence did not justify routine access to that much personal information. It generally required a warrant for the digital search and preserved case-specific exigent circumstances. Read Part IV and the concluding paragraph, then write the narrowest rule that explains the result."
        ]
      },
      {
        "kind": "application",
        "heading": "A changed fact earns its place only if it changes the reasoning.",
        "body": [
          "Imagine a later case involving the same kind of phone after a lawful arrest. The officer reads stored messages out of ordinary curiosity. Now add credible, specific evidence of an imminent threat to a missing person. The new fact bears on the emergency justification Riley left open. Changing the brand of phone gives the court much less to work with. A denial of discretionary Supreme Court review, meanwhile, leaves the lower judgment standing without adopting its reasoning."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "which-court",
        "relationship": "A ruling’s reach depends on the issue and which court will hear the next dispute."
      }
    ],
    "sources": [
      {
        "label": "Cornell Wex · Stare decisis",
        "url": "https://www.law.cornell.edu/wex/stare_decisis",
        "accessed": "2026-11-14",
        "note": "Vertical and horizontal precedent and the significance of a court’s place in the hierarchy."
      },
      {
        "label": "Supreme Court · Riley v. California (2014)",
        "url": "https://www.law.cornell.edu/supremecourt/text/13-132",
        "accessed": "2026-11-14",
        "note": "Read the opinion’s concluding paragraph and Part IV on emergency circumstances."
      },
      {
        "label": "Supreme Court · The Court and its procedures",
        "url": "https://www.supremecourt.gov/about/procedures.aspx",
        "accessed": "2026-11-14",
        "note": "Petition, briefing, argument and the work of deciding cases."
      }
    ]
  },
  {
    "id": "inside-the-cabinet",
    "topicId": "us-governance",
    "title": "What does a Cabinet secretary actually do?",
    "subtitle": "Follow a transportation proposal from a conversation with the president to a decision someone has authority to sign.",
    "centralQuestion": "When is a secretary advising the president, and when is the secretary exercising departmental power?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A Cabinet meeting can end in agreement while the legal work is just beginning.",
        "body": [
          "Imagine the president asks how to reduce deaths involving reversing vehicles. Transportation can explain how vehicles are designed and regulated. Other officials might raise manufacturing costs, enforcement capacity or budget needs. The president can use that discussion to set priorities. A manufacturer seeking the applicable test standard still needs a different document."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "The secretary holds two jobs in the same chair.",
        "body": [
          "Article II allows the president to require written opinions from principal officers on matters related to their duties. The Cabinet grew out of advisory practice. Its membership can extend beyond the heads of the executive departments listed in 5 U.S.C. § 101. For the departmental job, open 49 U.S.C. § 102. Congress established the Department of Transportation, put a secretary at its head and specified presidential appointment with Senate advice and consent. An organizational chart tells you who reports to whom. The statute tells you what that hierarchy can do."
        ]
      },
      {
        "kind": "case",
        "heading": "A good staff memo needs an authority paragraph.",
        "body": [
          "Vehicle standards illustrate the journey. Section 30111 assigns the secretary responsibility for motor vehicle safety standards and supplies criteria, including practicability, safety need and objective terms. The National Highway Traffic Safety Administration, within the department, brings engineers, legal staff and rulemaking procedures to the job. In its 2014 rear-visibility rule, the agency explained how it carried out a specific congressional mandate. Notice what survives a change of secretary. A new official can bring different priorities while inheriting statutory duties, a technical record and existing rules."
        ]
      },
      {
        "kind": "comparison",
        "heading": "An American secretary and a German minister answer to different arrangements.",
        "body": [
          "Article 65 of Germany’s Basic Law gives the chancellor responsibility for general policy guidelines, assigns each minister independent responsibility within those guidelines, and gives the federal government the job of settling disagreements among ministers. Try locating those three decisions in the American constitutional text. Article II supplies the opinion power, but gives no equivalent Cabinet-wide procedure for resolving a disagreement between Transportation and another department. Knowing who can convene the room still leaves the question of who may sign."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "from-statute-to-rule",
        "relationship": "The secretary’s authority identifies who may act. The rulemaking record explains how that authority produced a testable vehicle standard."
      }
    ],
    "sources": [
      {
        "label": "National Archives · Constitution transcript",
        "url": "https://www.archives.gov/founding-docs/constitution-transcript",
        "accessed": "2026-11-14",
        "note": "Read the named article and section alongside the example."
      },
      {
        "label": "5 U.S.C. § 101 · Executive departments",
        "url": "https://www.law.cornell.edu/uscode/text/5/101",
        "accessed": "2026-11-14",
        "note": "The statutory list gives a boundary for a departmental map."
      },
      {
        "label": "49 U.S.C. § 102 · Department of Transportation",
        "url": "https://www.law.cornell.edu/uscode/text/49/102",
        "accessed": "2026-11-14",
        "note": "Subsections (a) and (b) establish the department, its head and the appointment process."
      },
      {
        "label": "49 U.S.C. § 30111 · Motor vehicle safety standards",
        "url": "https://www.law.cornell.edu/uscode/text/49/30111",
        "accessed": "2026-11-14",
        "note": "Subsection (a) supplies criteria for safety standards."
      },
      {
        "label": "Federal Register · Rear visibility final rule, April 7, 2014",
        "url": "https://www.govinfo.gov/content/pkg/FR-2014-04-07/pdf/2014-07469.pdf",
        "accessed": "2026-11-14",
        "note": "The summary, dates, phase-in and regulatory text distinguish purpose, performance requirements and compliance dates."
      },
      {
        "label": "German Basic Law · English translation",
        "url": "https://www.gesetze-im-internet.de/englisch_gg/englisch_gg.html",
        "accessed": "2026-11-14",
        "note": "Articles 63, 65, 67, 68 and 83 describe executive selection, ministerial leadership, confidence and administration by the Länder."
      }
    ]
  },
  {
    "id": "from-statute-to-rule",
    "topicId": "us-governance",
    "title": "How can an agency make binding rules?",
    "subtitle": "The view behind a reversing car began as a legal instruction that engineers had to make testable.",
    "centralQuestion": "How does a congressional safety mandate become a requirement a manufacturer can test?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "“See behind the car” is a goal. A test laboratory needs dimensions.",
        "body": [
          "Imagine two vehicles with rear cameras. One displays an image promptly. The other takes long enough to boot that the driver is already moving. Counting cameras gives both vehicles the same score. A safety standard has to decide which differences matter and how two labs could reach the same answer. Those decisions have consequences for the child in the driveway and the engineer certifying the car."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Congress can delegate a technical choice and keep its boundaries enforceable.",
        "body": [
          "Start with statutory authority. Section 30111 requires motor vehicle safety standards to satisfy specified criteria. The Cameron Gulbransen Kids Transportation Safety Act added a mandate concerning rearward visibility. Within those bounds, NHTSA had to translate a safety objective into specifications. For ordinary notice-and-comment rulemaking under the Administrative Procedure Act, the agency publishes a proposal, invites submissions, considers relevant material and explains the adopted rule. Section 553 contains exceptions. A docket full of identical comments can demonstrate concern. It cannot measure a camera’s response time."
        ]
      },
      {
        "kind": "case",
        "heading": "One rule has several important dates.",
        "body": [
          "Open the first page of the April 7, 2014 final rule. June 6, 2014 was the effective date. The document separately phases in manufacturer compliance, reaching full compliance for covered new vehicles manufactured on or after May 1, 2018. A vehicle already sitting in a driveway on that date did not acquire a retrofit obligation under this rule merely because the calendar turned. To determine coverage, check the class of vehicle, weight threshold and manufacturing date."
        ]
      },
      {
        "kind": "application",
        "heading": "A specification and an outcome require different evidence.",
        "body": [
          "Search the rule for “response time.” A lab can measure when the required rearview image appears under defined test conditions. Passing that test establishes a narrow fact about performance. To estimate injuries prevented, investigators would need crash data, exposure to reversing maneuvers and a credible comparison. The explanatory preamble helps you recover the agency’s reasons and forecasts. The regulatory text supplies the requirements. Courts reviewing agency action can examine whether the agency stayed within its authority and explained its choices."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "inside-the-cabinet",
        "relationship": "Read the departmental statute to see why this agency was in a position to write the rule."
      }
    ],
    "sources": [
      {
        "label": "5 U.S.C. § 553 · Rulemaking",
        "url": "https://www.law.cornell.edu/uscode/text/5/553",
        "accessed": "2026-11-14",
        "note": "Read (b) through (d) for notice, participation, timing and exceptions."
      },
      {
        "label": "49 U.S.C. § 30111 · Motor vehicle safety standards",
        "url": "https://www.law.cornell.edu/uscode/text/49/30111",
        "accessed": "2026-11-14",
        "note": "Subsection (a) supplies criteria for safety standards."
      },
      {
        "label": "Federal Register · Rear visibility final rule, April 7, 2014",
        "url": "https://www.govinfo.gov/content/pkg/FR-2014-04-07/pdf/2014-07469.pdf",
        "accessed": "2026-11-14",
        "note": "The summary, dates, phase-in and regulatory text distinguish purpose, performance requirements and compliance dates."
      }
    ]
  },
  {
    "id": "permission-to-spend",
    "topicId": "us-governance",
    "title": "Why can Congress authorize a program and leave it short of funds?",
    "subtitle": "A town qualifies for a grant. The question at the signing table is whether anyone can lawfully promise the money.",
    "centralQuestion": "Which legal and financial steps separate a program on paper from a payment?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "An eligible applicant can arrive at an empty account.",
        "body": [
          "Imagine a federal bridge-inspection grant statute that permits awards and authorizes Congress to appropriate up to $12 million for one year. A town files a qualifying application for $2 million. Its treasurer pencils the grant into a forecast. Before the town signs a contract, someone should find the provision that actually makes money available. An excellent grant application is a curious form of currency."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Authorization, appropriation, obligation and outlay answer four questions.",
        "body": [
          "Authorization establishes or governs an activity. An appropriation makes budget authority available under legally specified conditions. An obligation is a binding government commitment, such as an executed award. An outlay is a payment. Article I, section 9 conditions withdrawals from the Treasury on appropriations made by law. Congress can provide authority and funding in the same statute. Some programs have standing funding. The title of a bill will take you only so far. Read its operative language."
        ]
      },
      {
        "kind": "case",
        "heading": "Money has a purpose, a period of availability and a limit.",
        "body": [
          "In our invented program, a later law appropriates $5 million exclusively for bridge inspections. Assume the agency has all $5 million available to obligate, has validly committed $4 million, and has paid just $1 million. Remaining unobligated authority is $1 million. The $3 million committed but unpaid already belongs in the obligations column. A $2 million award would exceed the available balance on these facts. Section 1341 generally bars obligations beyond available amounts and obligations in advance of appropriations unless authorized by law."
        ]
      },
      {
        "kind": "application",
        "heading": "Changing one verb changes the investigation.",
        "body": [
          "If officials say “Congress cut the program,” identify which figure fell. A lower authorization ceiling can leave current awards untouched. A smaller appropriation may reduce new awards. A drop in outlays could mean an invoice arrived late. And if the appropriation becomes available for two years, one year’s unspent cash figure tells you even less about the ability to make new commitments. To explain a delayed inspection, trace the award, the invoice and the payment as distinct events."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "when-a-bill-binds",
        "relationship": "Read the enacted language twice, first for the program it creates and again for any money it supplies."
      }
    ],
    "sources": [
      {
        "label": "National Archives · Constitution transcript",
        "url": "https://www.archives.gov/founding-docs/constitution-transcript",
        "accessed": "2026-11-14",
        "note": "Read the named article and section alongside the example."
      },
      {
        "label": "GAO · Principles of Federal Appropriations Law",
        "url": "https://www.gao.gov/legal/appropriations-law/red-book",
        "accessed": "2026-11-14",
        "note": "The Red Book explains availability for purpose, time and amount."
      },
      {
        "label": "31 U.S.C. § 1341 · Limitations on spending and obligations",
        "url": "https://www.law.cornell.edu/uscode/text/31/1341",
        "accessed": "2026-11-14",
        "note": "Read (a)(1) for the restrictions on obligations and the statutory exception."
      }
    ]
  },
  {
    "id": "replacing-a-government",
    "topicId": "us-governance",
    "title": "Why doesn’t Germany govern like the United States?",
    "subtitle": "Give two legislatures the same dissatisfied majority and watch what each can actually change.",
    "centralQuestion": "What changes when a legislature can replace the head of government by electing a successor?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A majority against a leader can be a minority for every replacement.",
        "body": [
          "Imagine a 100-member legislature. Fifty-five members oppose the head of government. Thirty favor one successor and twenty-five insist on another. That is enough agreement for a bruising speech. Whether it can produce a new executive depends on the constitutional rule for turning opposition into office."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Germany makes a replacement majority do two jobs at once.",
        "body": [
          "Under Article 63 of Germany’s Basic Law the Bundestag elects the chancellor through a prescribed process. Under Article 67 it can withdraw confidence by electing a successor with a majority of its members and asking the federal president to dismiss the incumbent. The president must comply and appoint the elected successor. In our fully seated chamber the threshold is 51. If the two groups unite behind one candidate, the government can change between general elections. Article 68 separately addresses a confidence motion initiated by the chancellor. Losing a policy vote by itself triggers neither procedure."
        ]
      },
      {
        "kind": "case",
        "heading": "In 1982 a change of coalition changed the chancellor.",
        "body": [
          "On October 1, 1982, the Bundestag elected Helmut Kohl to succeed Helmut Schmidt through Article 67. The important historical detail is the positive vote for Kohl. Disagreement with Schmidt explains why politicians sought a change. Agreement on who would govern made the mechanism work. Read the Bundestag retrospective for the vote and then read Article 67 for the requirement. They answer different questions."
        ]
      },
      {
        "kind": "comparison",
        "heading": "A U.S. congressional majority can block a president’s bill and still have to govern alongside that president.",
        "body": [
          "U.S. presidents serve a separately constituted term. Congressional disagreement can defeat legislation or change what receives funding. Replacing a president through impeachment and conviction requires a House impeachment and a two-thirds vote of senators present to convict on constitutional grounds. Congress does not elect its preferred successor in that proceeding. Ordinary presidential succession is separately prescribed. A fixed term can preserve executive continuity through legislative defeat. It can also sustain a standoff in which voters struggle to assign responsibility. Neither design guarantees good decisions. The rule changes what rivals must agree on before they acquire power."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "inside-the-cabinet",
        "relationship": "Once you know how chief executives keep their jobs, compare how much room their ministers have to make departmental decisions."
      }
    ],
    "sources": [
      {
        "label": "German Basic Law · English translation",
        "url": "https://www.gesetze-im-internet.de/englisch_gg/englisch_gg.html",
        "accessed": "2026-11-14",
        "note": "Articles 63, 65, 67, 68 and 83 describe executive selection, ministerial leadership, confidence and administration by the Länder."
      },
      {
        "label": "Bundestag · The October 1982 confidence vote (German)",
        "url": "https://www.bundestag.de/dokumente/textarchiv/1982-10-01-misstrauensvotum-schmidt-908192",
        "accessed": "2026-11-14",
        "note": "The Bundestag’s retrospective reconstructs the vote that replaced Schmidt with Kohl."
      },
      {
        "label": "National Archives · Constitution transcript",
        "url": "https://www.archives.gov/founding-docs/constitution-transcript",
        "accessed": "2026-11-14",
        "note": "Read the named article and section alongside the example."
      }
    ]
  }
];
