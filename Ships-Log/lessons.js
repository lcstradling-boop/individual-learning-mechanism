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
  }
];
