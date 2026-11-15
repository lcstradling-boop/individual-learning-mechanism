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
  },
  {
    "id": "physics-record",
    "topicId": "physics-i",
    "title": "The probe returned. Did it go nowhere?",
    "subtitle": "Two endpoint readings can conceal many journeys.",
    "centralQuestion": "What can endpoints tell us about a journey, and what must we observe between them?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "RAMIE: The probe left the station and returned twelve seconds later. The displacement is zero.",
          "PRIVET: Then should the report say it did not travel?",
          "RAMIE: That would be a remarkably economical journey. Unfortunately, the tracking instrument disagrees.",
          "PRIVET: Perhaps our report is asking one number to preserve two different things.",
          "RAMIE: Let us draw two journeys that begin and end here. If the drawings disagree while the endpoint readings agree, those readings cannot determine the journey.",
          "Pause before continuing: draw one moving journey and one stationary history lasting twelve seconds. Decide which measurements distinguish them."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "A position is a coordinate assigned relative to an origin and axes. It is not a quantity an object carries independently of our description. On a straight track, choose the station as x=0 and the outward direction as positive. Displacement is final position minus initial position. Distance adds the lengths actually traveled, without allowing inward travel to cancel outward travel.",
          "Average velocity divides displacement by elapsed time; average speed divides distance by elapsed time. Their units agree, but their meanings differ. Equal units are a necessary consistency check, not a proof that two quantities are interchangeable. A zero average velocity can conceal substantial motion.",
          "Endpoint information supports a claim about net change. It does not establish maximum speed, turning points, time spent resting, or total distance unless further assumptions are supplied. This is an information problem before it is a calculation problem."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "Δx = x_final − x_initial;    v_average = Δx / Δt",
          "distance = sum of path lengths;    average speed = distance / Δt",
          "In one dimension, displacement can be positive, negative, or zero. Distance is nonnegative. Always state the chosen positive direction."
        ]
      },
      {
        "kind": "figure",
        "heading": "Inspect the representation",
        "body": [
          "Idealized out-and-back motion. The rising and falling segments have equal and opposite slopes. The corner hides the finite duration of a real turn."
        ],
        "visual": {
          "type": "plot",
          "xLabel": "Time (s)",
          "yLabel": "Position (m)",
          "points": [
            [
              0,
              0
            ],
            [
              6,
              18
            ],
            [
              12,
              0
            ]
          ]
        }
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "The probe moves from x=0 to x=18 m during the first 6 s, then returns to x=0 during the next 6 s. Assume constant velocity on each leg and idealize the brief turn. The first leg has velocity +3 m/s and the second −3 m/s. Displacement is 0−0=0 m, while distance is 18+18=36 m. Average velocity is 0 m/s; average speed is 3 m/s.",
          "Move the origin 100 m to the left. The coordinates become 100, 118, and 100 m. The displacement and distance remain unchanged. Coordinate values changed; the physical journey did not. A moving observer can measure a different displacement over the same interval, which we will investigate separately.",
          "The sharp corner in this idealized position graph represents an instantaneous velocity change. A real probe takes time to turn. The piecewise model is useful for endpoint accounting, but cannot give a realistic acceleration at the corner."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "The instrument now records x=0 at t=0 and x=12 m at t=12 s. One probe moves steadily at 1 m/s. Another travels outward rapidly, returns partway, and ends at 12 m. Both have average velocity +1 m/s. Only the first has distance 12 m. What additional observation could rule out a reversal? A few extra samples help, but can still miss motion between samples unless a model bounds it."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: endpoint subtraction preserves net change while discarding the path. You can now ask which parts of that hidden history a velocity graph could recover. No test here establishes your general fluency with vectors; it establishes a narrower distinction between position, distance, and displacement."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "calculus-total",
        "relationship": "A definite integral also preserves a net total; its integrand describes the history that endpoints alone conceal."
      },
      {
        "lessonId": "physics-slope",
        "relationship": "Derivatives recover local information from a sufficiently detailed position model."
      }
    ],
    "sources": [
      {
        "label": "OpenStax University Physics 1 • Position and displacement",
        "url": "https://openstax.org/books/university-physics-volume-1/pages/3-1-position-displacement-and-average-velocity",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "physics-slope",
    "topicId": "physics-i",
    "title": "The slope changed before the direction did",
    "subtitle": "Negative acceleration does not necessarily mean backward motion.",
    "centralQuestion": "How do velocity and acceleration together determine whether an object is speeding up?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "PYE: The acceleration is negative. We should look for the probe behind us.",
          "RAMIE: It remains ahead and is still moving outward.",
          "PYE: Then the sign has told us less than I requested of it.",
          "RAMIE: It tells us how velocity changes, relative to our chosen axis. We still need the velocity itself.",
          "PYE: Let us predict when it turns. If we merely say “negative means backward,” we cannot even agree about which graph to draw.",
          "Before reading the model, sketch a positive velocity that decreases through zero. Mark where the probe slows, stops for an instant, and speeds up."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "Velocity is the instantaneous slope of position against time. Acceleration is the instantaneous slope of velocity against time. A negative slope in the velocity graph means velocity becomes more negative, not necessarily that velocity already is negative.",
          "In one dimension, nonzero velocity and acceleration with the same sign imply increasing speed. Opposite signs imply decreasing speed. At v=0, inspect neighboring times rather than applying a sign slogan. Speed is |v| and can have a corner where velocity crosses zero.",
          "Differentiation can discard information. Knowing a(t) determines changes in velocity, but an initial velocity is needed to choose one velocity history. Likewise, an initial position is needed after integrating velocity. These constants encode physical information, not an inconvenience of notation."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "v(t) = dx/dt;    a(t) = dv/dt = d²x/dt²",
          "For v ≠ 0: d|v|/dt = sign(v) a.",
          "For constant a: v(t)=v₀+at; x(t)=x₀+v₀t+½at². These formulas require constant acceleration."
        ]
      },
      {
        "kind": "figure",
        "heading": "Inspect the representation",
        "body": [
          "Velocity decreases linearly. Positive values before 3 s mean outward motion; negative values afterward mean inward motion."
        ],
        "visual": {
          "type": "plot",
          "xLabel": "Time (s)",
          "yLabel": "Velocity (m/s)",
          "points": [
            [
              0,
              6
            ],
            [
              3,
              0
            ],
            [
              5,
              -4
            ]
          ]
        }
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "Let x₀=0 m, v₀=6 m/s, and a=−2 m/s² for 0≤t≤5 s. Then v=6−2t and x=6t−t². At t=2 s, v=+2 m/s: the probe is moving outward but slowing. At t=3 s, v=0 and x=9 m: it turns. At t=4 s, v=−2 m/s: it is moving inward and speeding up.",
          "At t=5 s, x=5 m. The total distance is 9 m outward plus 4 m inward, or 13 m. The endpoint displacement is only 5 m. Acceleration stayed negative throughout; the role of that acceleration relative to motion changed at the turning point.",
          "Differentiate the position formula to check the velocity; differentiate again to check acceleration. A derivative check cannot determine whether the assumed constant acceleration matches a real instrument record. Mathematical consistency and empirical adequacy are distinct checks."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "Now let a(t)=−2t m/s² when t is measured in seconds. Keeping the same initial velocity gives v(t)=6−t², not 6−2t². Integration accumulates the changing acceleration. The turn occurs at √6 s. The constant-acceleration formulas no longer apply, although the derivative definitions still do."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: acceleration changes velocity, while velocity determines the direction of travel. The next question is what physical interaction produces that change. The calculus course approaches the same structure through accumulation functions."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "physics-record",
        "relationship": "Use graph shape to recover path information that endpoints conceal."
      },
      {
        "lessonId": "calculus-rate",
        "relationship": "An accumulation function restores changing state from a rate plus an initial condition."
      },
      {
        "lessonId": "physics-coasting",
        "relationship": "A force model explains the acceleration that these graphs only describe."
      }
    ],
    "sources": [
      {
        "label": "OpenStax University Physics 1 • Acceleration",
        "url": "https://openstax.org/books/university-physics-volume-1/pages/3-3-average-and-instantaneous-acceleration",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "physics-observers",
    "topicId": "physics-i",
    "title": "Two observers, one trajectory",
    "subtitle": "A moving platform changes the description of a launch.",
    "centralQuestion": "Which features of a trajectory change when the observer moves at constant velocity?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "CONOY: The object returned directly to its release point.",
          "CLARY: My record shows it landing several metres to the right.",
          "CONOY: Shall we inspect our clocks?",
          "CLARY: First, our platforms. You traveled with the release point. I remained beside the track.",
          "CONOY: Then our disagreement may be a transformation between descriptions, rather than a disagreement about the event.",
          "Sketch both views before calculating. Does an object released upward from a steadily moving platform lose its horizontal velocity?"
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "A vector specifies magnitude and direction. In a chosen Cartesian frame, its components are signed numbers along perpendicular axes. Components are not separate objects; they are a representation of one vector. A velocity of (3,4) m/s has speed √(3²+4²)=5 m/s.",
          "For two inertial frames with parallel axes, coordinate origins coinciding at t=0, and relative horizontal velocity u, use x′=x−ut and y′=y. Thus v′x=vx−u, while acceleration is unchanged because u is constant. This is the classical Galilean model, appropriate far below the speed of light.",
          "Projectile equations separate into horizontal and vertical components when gravity is uniform and air resistance is negligible. Independence means the equations decouple under those assumptions. It does not mean an observer sees two physical motions occurring separately. Both components share the same time."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "x=x₀+v₀x t;    y=y₀+v₀y t−½gt²",
          "v₀x=v₀ cos θ;    v₀y=v₀ sin θ",
          "For a platform moving at constant u: x′=x−ut; v′x=vx−u; a′=a."
        ]
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "Use g=10 m/s² as a deliberately rounded model value. A platform moves at +3 m/s. It launches a small object vertically at 10 m/s relative to itself, from height y=0. In the ground frame, v₀=(3,10) m/s. The object returns to launch height when 0=10t−5t², giving t=2 s besides the release instant. Its ground-frame landing position is x=6 m.",
          "The platform also travels 6 m. In its frame, x′=3t−3t=0 at every instant. One observer sees a vertical path and another a parabola, but both identify the same reunion. At the highest point, vertical velocity is zero; ground-frame speed is 3 m/s, whereas platform-frame speed is zero.",
          "The maximum height occurs at t=1 s and is 5 m above release. These results depend on equal release and landing heights. A universal-looking range formula often conceals that condition."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "If the platform accelerates after launch, x′=x−x_platform(t) still transforms position, but a′=a−a_platform. The moving frame is no longer inertial. If drag matters, horizontal acceleration need not vanish, and the simple component equations must be replaced by the appropriate force model. Keeping axes perpendicular does not restore the old assumptions."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: observers can disagree about paths and velocities while agreeing about the same physical meeting. You can now ask which laws retain their form between inertial observers. Later orbital paths will require varying directions of gravity rather than the uniform field used here."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "physics-slope",
        "relationship": "Apply derivative definitions to each coordinate and keep direction distinct from speed."
      },
      {
        "lessonId": "physics-turning",
        "relationship": "Circular motion changes velocity direction even when speed remains fixed."
      }
    ],
    "sources": [
      {
        "label": "OpenStax University Physics 1 • Relative motion",
        "url": "https://openstax.org/books/university-physics-volume-1/pages/4-5-relative-motion-in-one-and-two-dimensions",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "physics-coasting",
    "topicId": "physics-i",
    "title": "What keeps the probe moving?",
    "subtitle": "An engine explains a change in motion, not the mere existence of motion.",
    "centralQuestion": "What does a force diagram predict after a probe’s engine shuts down?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "CASSAVA: The engine is silent. What keeps the probe moving?",
          "PYE: Your question seems to require a continuing explanation for velocity. What if interactions explain changes in velocity?",
          "CASSAVA: Then propose an observation that separates those accounts.",
          "PYE: Track the velocity after shutdown in a region where the other forces are negligible.",
          "CASSAVA: And if it changes?",
          "PYE: We must investigate the interactions we neglected. “No engine” is not equivalent to “no force.”"
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "Newton’s first law identifies inertial frames: an isolated object has constant velocity. Rest is one possible constant velocity. The second law relates net external force to acceleration; for constant mass, sum all external force vectors and divide by mass.",
          "A free-body diagram isolates one object and shows forces acting on it. Each arrow should have a physical source: another object or field. Velocity is useful on a separate motion diagram, but is not a force. “Forward force from motion” adds an interaction that has not been identified.",
          "Newton’s third law pairs forces on different objects. The force the engine exhaust exerts on a probe and the force the probe exerts on exhaust cannot cancel in the probe’s own free-body diagram. Whether they are internal depends on the system chosen. Here we idealize a short powered interval with approximately constant mass; actual rockets lose mass and need momentum-flow accounting."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "ΣF_external = ma  (constant mass, inertial frame)",
          "a=0 implies v is constant; it does not imply v=0.",
          "F_A on B = −F_B on A. These forces act on different objects."
        ]
      },
      {
        "kind": "figure",
        "heading": "Isolate the object",
        "body": [
          "A schematic free-body diagram while the object moves or is pulled to the right. Arrows identify interactions, not a velocity. Vertical forces balance in these level-track examples. Arrow lengths are schematic, not numerical force measurements."
        ],
        "visual": {
          "type": "forces",
          "labels": [
            "Normal force N",
            "Weight mg",
            "Applied force",
            "No horizontal resistance in the ideal model"
          ],
          "resistance": false
        }
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "An idealized 2 kg cart on a horizontal nearly frictionless track initially travels at +3 m/s. A horizontal actuator applies +4 N for 2 s. The vertical normal force balances weight; the horizontal net force is +4 N. Therefore a=2 m/s², final v=7 m/s, and displacement during the push is 3(2)+½(2)(2²)=10 m.",
          "After the actuator disengages, assume residual friction is negligible. Net force becomes zero. The cart continues at +7 m/s, covering 21 m over the next 3 s. Its acceleration changes at disengagement, but velocity does not instantly jump. An instantaneous velocity jump would require an idealized impulse rather than an ordinary finite force.",
          "If the observed speed decreases, the inertial model does not automatically fail. A small drag or contact force may have been omitted. Estimate that missing net force from measured acceleration before inventing a different principle."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "A constant resistive force of −1 N remains after disengagement. The cart’s acceleration is now −0.5 m/s² while it moves forward, so it slows. Our prediction changed because the inventory of interactions changed. Once it stops, a constant backward “friction” cannot be extended blindly: friction opposes actual or impending relative slipping, so its model needs reconsideration."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: motion and force are different levels of description. You can now investigate how contact forces adjust to constraints rather than assuming every force is independently specified."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "physics-slope",
        "relationship": "The same acceleration can produce different motion depending on initial velocity."
      },
      {
        "lessonId": "physics-floor",
        "relationship": "A normal force or static friction can be determined by a constraint, rather than assigned in advance."
      }
    ],
    "sources": [
      {
        "label": "OpenStax University Physics 1 • Newton’s second law",
        "url": "https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "physics-floor",
    "topicId": "physics-i",
    "title": "The floor is part of the experiment",
    "subtitle": "A stationary sled can have changing friction.",
    "centralQuestion": "How do constraints determine contact forces before an object begins to slide?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "ROOT: The sled has not moved. I increased the pull, but friction still balances it.",
          "COLEUS: Then friction has changed.",
          "ROOT: I had written μN as though it were a fixed answer.",
          "COLEUS: Is that expression a measured force, or a limit on the force this surface can provide?",
          "ROOT: Let us predict the pull at which the two accounts differ.",
          "Draw the stationary sled first. Label every interaction and identify which acceleration components are constrained to zero."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "A normal force is the contact force perpendicular to a surface. It is not automatically equal to mg. Its value follows from the force balance perpendicular to the surface, provided contact is maintained. Static friction acts tangentially and adjusts within a range to prevent relative slipping.",
          "The idealized dry-friction model gives |f_s|≤μ_sN. Equality describes the impending-slip threshold, not every stationary state. During sliding, the approximate kinetic model is |f_k|=μ_kN, opposing relative motion. Coefficients summarize a complex contact process and are empirical approximations.",
          "For an incline at angle θ, choose one axis along the slope and one perpendicular to it. Resolve gravity into mg sin θ down the slope and mg cos θ into the surface. This coordinate choice simplifies the constraints; it does not rotate gravity itself."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "Along a level surface with a horizontal pull and no vertical acceleration: N=mg.",
          "While stationary: f_s=−F_pull, provided |F_pull|≤μ_sN.",
          "Sliding along an incline: ΣF_parallel=ma; if no other perpendicular forces act, N=mg cos θ."
        ]
      },
      {
        "kind": "figure",
        "heading": "Isolate the object",
        "body": [
          "A schematic free-body diagram while the object moves or is pulled to the right. Arrows identify interactions, not a velocity. Vertical forces balance in these level-track examples. Arrow lengths are schematic, not numerical force measurements."
        ],
        "visual": {
          "type": "forces",
          "labels": [
            "Normal force N",
            "Weight mg",
            "Applied force",
            "Resistance"
          ],
          "resistance": true
        }
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "Use m=10 kg, g=10 m/s², μ_s=0.40, and μ_k=0.30. On a horizontal surface N=100 N. A 20 N pull is balanced by 20 N static friction. A 35 N pull is balanced by 35 N static friction. The largest sustainable static-friction magnitude in this model is 40 N.",
          "At a 45 N pull, a stationary balance would require 45 N friction, exceeding that limit. Once sliding forward, kinetic friction is approximately 30 N backward. Net force is 15 N and acceleration is 1.5 m/s². The transition changes the friction model, not Newton’s law.",
          "Now remove the pull and tilt the stationary surface. Static friction can support equilibrium if mg sin θ≤μ_s mg cos θ, or tan θ≤μ_s. With μ_s=0.40, the threshold angle is about 21.8°. At a smaller angle, friction is mg sin θ, not μ_smg cos θ."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "Pull the sled upward at an angle α. If it stays on the level floor with zero vertical acceleration, N=mg−F sin α. The pull changes both the horizontal driving force and the available friction. If this equation predicts N<0, contact has been lost and the assumed contact model is invalid. A negative normal force is a diagnostic, not a floor pulling the sled downward."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: some forces are responses needed to satisfy a constraint, within a physical limit. You can now recognize why choosing axes and testing inequalities come before inserting numbers into a friction formula."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "physics-coasting",
        "relationship": "Newton’s law remains the same while the contact-force model changes."
      },
      {
        "lessonId": "physics-boundary",
        "relationship": "System boundaries determine which contact interactions count as external."
      }
    ],
    "sources": [
      {
        "label": "OpenStax University Physics 1 • Friction",
        "url": "https://openstax.org/books/university-physics-volume-1/pages/6-2-friction",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "physics-turning",
    "topicId": "physics-i",
    "title": "The engine is silent. Why is the probe accelerating?",
    "subtitle": "An unchanging speed can hide a continuously changing velocity.",
    "centralQuestion": "Why does constant-speed circular motion require a net inward force?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "AVENS: Its speed is perfectly steady. A successful coast!",
          "RAMIE: Its direction changes throughout the record.",
          "PYE: Then draw the velocity arrows. We must stop asking the speedometer to describe the entire velocity.",
          "AVENS: The arrows have the same length.",
          "RAMIE: Place their tails together. There is still a difference between them.",
          "PYE: What direction does that difference approach as the interval becomes small?"
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "On a circular path, velocity is tangent to the circle. Two nearby tangents differ even when their lengths agree. Acceleration measures that vector change divided by elapsed time. For constant-speed circular motion its direction is inward, perpendicular to instantaneous velocity.",
          "For a small swept angle Δθ measured in radians, the velocity-vector change has magnitude approximately vΔθ. Meanwhile the distance traveled along the circle is rΔθ=vΔt. Combine these to find |Δv|/Δt≈v²/r; the limit gives the exact instantaneous result.",
          "“Centripetal force” names the inward net-force component required by the motion. Gravity, tension, contact, or a combination can supply it. Do not draw an extra centripetal-force arrow in addition to those physical interactions. If speed also changes, acceleration additionally has a tangential component."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "a_radial=v²/r;    ΣF_inward=mv²/r",
          "T=2πr/v, where T is the period of one revolution.",
          "For changing speed: a_tangential=dv/dt; inward and tangential components are perpendicular."
        ]
      },
      {
        "kind": "figure",
        "heading": "Direction is part of velocity",
        "body": [
          "At the rightmost point of the counterclockwise circular path, velocity points upward and acceleration points toward the center. These are motion vectors, not a free-body diagram; identify the physical source of force separately."
        ],
        "visual": {
          "type": "circle"
        }
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "A 2 kg object travels at 4 m/s in a horizontal circle of radius 8 m. Its inward acceleration is 16/8=2 m/s² and required inward net force is 4 N. The period is 2π(8)/4=4π s, about 12.6 s. In an ideal overhead view, a string could provide the inward force while vertical forces balance.",
          "Double speed while holding radius fixed: acceleration becomes 64/8=8 m/s² and inward force becomes 16 N. Four times the force is required, not twice. Double radius at the original speed and acceleration halves. These are conditional comparisons: changing radius while instead holding angular speed fixed gives a different scaling.",
          "If the string breaks, its force disappears. At that instant, the object retains its tangent velocity; it does not acquire an outward radial velocity merely because the constraint vanished. Subsequent motion depends on the remaining forces."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "With angular speed ω=v/r, the same relation becomes a_radial=ω²r. Does increasing radius increase or decrease acceleration? It depends on whether v or ω is held fixed. Apparent contradictions in proportional reasoning often come from changing the controlled quantity without saying so. A formula is a relationship among variables, not a one-variable slogan."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: changing direction is acceleration, and the motion specifies a required inward net force. This opens a future orbital question: can gravity supply exactly that requirement? No claim here uses the game’s gravity or planetary scale as real-world evidence."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "physics-observers",
        "relationship": "Velocity is a vector whose representation and change must be tracked component by component."
      },
      {
        "lessonId": "physics-launch",
        "relationship": "Work depends on the component of force along motion; an inward force can redirect velocity without increasing speed."
      }
    ],
    "sources": [
      {
        "label": "OpenStax University Physics 1 • Uniform circular motion",
        "url": "https://openstax.org/books/university-physics-volume-1/pages/6-3-centripetal-force",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "physics-launch",
    "topicId": "physics-i",
    "title": "How much does a launch cost?",
    "subtitle": "A total energy transfer does not determine the force history.",
    "centralQuestion": "How can work predict launch speed without reconstructing the entire acceleration history?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "AVENS: Twice the launch speed should require twice the energy.",
          "PRIVET: That is a hypothesis. Shall we derive the relationship before adjusting the apparatus?",
          "AVENS: The force rises as the carriage travels. I would rather not solve for every instant.",
          "PRIVET: Then let us add what the force contributes over each small displacement. We must preserve direction: a force perpendicular to travel is a different case.",
          "Predict whether doubling launch speed will double, quadruple, or otherwise change the required net work. Defend a guess before continuing."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "Work accumulates force along displacement. For a constant force, W=F d cos θ, where θ is the angle between force and displacement. For changing force along a straight coordinate, W=∫F_x(x) dx. The sign records energy transfer to or from kinetic energy by that force.",
          "For constant mass, Newton’s law gives F_net=ma. Along a one-dimensional path where the change of variables is valid, a=v dv/dx, so F_net dx=mv dv. Integrating yields net work equal to the change in ½mv². More generally the vector work–energy theorem gives the same result.",
          "Net work includes every force’s contribution. An actuator’s positive work need not all become kinetic energy if friction also does negative work. Power describes the rate of energy transfer, not an additional kind of energy. Instantaneous power is F·v; average power is work divided by elapsed time."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "W_net = ∫ F_net · dr = ΔK;    K=½mv²",
          "For a straight path: W=∫[a to b] F_x(x) dx.",
          "P_average=W/Δt;    P_instantaneous=F·v. Units: N m=J; J/s=W (watt)."
        ]
      },
      {
        "kind": "figure",
        "heading": "Inspect the representation",
        "body": [
          "The actuator force rises with position. The triangular area under this graph is work, measured in joules."
        ],
        "visual": {
          "type": "plot",
          "xLabel": "Position (m)",
          "yLabel": "Force (N)",
          "points": [
            [
              0,
              0
            ],
            [
              3,
              12
            ]
          ]
        }
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "An ideal launcher pushes a 2 kg carriage from rest along x=0 to x=3 m with F_x(x)=4x N when x is in metres. Neglect resistance. The work is ∫₀³4x dx=[2x²]₀³=18 J. Thus ½(2)v²=18, giving final speed √18≈4.24 m/s. The force–position graph is a triangle with base 3 m and height 12 N, also giving area 18 J.",
          "Now include constant 2 N resistance over the same distance. Its work is −6 J, so net work is 12 J and final speed is √12≈3.46 m/s. The actuator still delivers 18 J; the kinetic-energy increase is smaller.",
          "If a different launcher delivers the same net work in less time, final kinetic energy is unchanged but average power is larger. The work calculation alone does not provide the launch duration or peak force. Several histories can deliver the same total."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "An inward force on a constant-speed circular trajectory is perpendicular to the displacement at each instant, so it does no work despite producing acceleration. This is not an exception to Newton’s law. Work tracks changes in speed through kinetic energy; it does not preserve all information about changes in velocity direction."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: integrating force over displacement can determine a change in kinetic energy while leaving the detailed trajectory unknown. Numerical accumulation becomes useful when the force is available only as measured samples."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "calculus-substitution",
        "relationship": "Substitution makes the chain rule behind a change of integration variable precise."
      },
      {
        "lessonId": "calculus-estimate",
        "relationship": "Sampled force measurements can estimate work without an exact force formula."
      },
      {
        "lessonId": "physics-turning",
        "relationship": "A perpendicular force changes direction while doing no work."
      }
    ],
    "sources": [
      {
        "label": "OpenStax University Physics 1 • Work–energy theorem",
        "url": "https://openstax.org/books/university-physics-volume-1/pages/7-3-work-energy-theorem",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "physics-boundary",
    "topicId": "physics-i",
    "title": "What crossed the boundary?",
    "subtitle": "A capture can conserve momentum while changing kinetic energy.",
    "centralQuestion": "How does the choice of system determine whether momentum is conserved?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "YARROW: The probe has been caught. Which quantity should we compare before and after?",
          "CASSAVA: Energy, surely.",
          "DAZ: Total energy, yes, if we account for every form and transfer. But is the kinetic energy unchanged?",
          "CASSAVA: The catcher warmed and deformed. That seems inconvenient.",
          "DAZ: Perhaps momentum answers our question with fewer unknowns. First, draw the boundary.",
          "YARROW: Around the probe alone, or around the probe and catcher together?",
          "DAZ: That choice determines which forces remain external."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "Linear momentum is p=mv. Newton’s second law in momentum form is ΣF_external=dp/dt. Integrating over a time interval gives impulse equal to momentum change. A large force acting briefly can deliver the same impulse as a small force acting longer.",
          "For a system of interacting bodies, internal forces cancel in the total momentum balance under the classical assumptions used here. Total momentum is conserved when net external impulse is zero, or approximately conserved when that impulse is negligible over the event. The forces between bodies can be enormous without violating this condition.",
          "Kinetic energy is not conserved in a perfectly inelastic collision, where the bodies stick together. Total energy remains accountable through internal energy, deformation, sound, and transfer across the chosen boundary. “Energy was lost” is incomplete unless it specifies kinetic energy or an identified transfer."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "p_total = Σ m_i v_i",
          "J_external = ∫[t₁ to t₂] ΣF_external dt = p_final − p_initial",
          "For a sticking collision with negligible external impulse: m₁u₁+m₂u₂=(m₁+m₂)v."
        ]
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "A 2 kg probe moving at +6 m/s is captured by a 4 kg catcher initially at rest on an ideal horizontal frictionless track. Choose both bodies as the system. Their horizontal external impulse is negligible. Initial momentum is 12 kg m/s, so their common final velocity is 12/6=2 m/s.",
          "Initial kinetic energy is ½(2)(6²)=36 J. Final kinetic energy is ½(6)(2²)=12 J. The 24 J difference goes into other forms of energy in this idealized closed capture model. Momentum conservation did not imply kinetic-energy conservation.",
          "For the probe alone, momentum changes from 12 to 4 kg m/s, so its impulse is −8 N s. For the catcher alone, the impulse is +8 N s. If capture lasts 0.20 s, the average horizontal force on the probe is −40 N. This average does not reveal the peak force.",
          "If you choose only the probe, the catcher’s force is external and probe momentum is not conserved. Redrawing a boundary does not change the event; it changes the accounting."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "Now bolt the catcher to a station. The station provides external impulse to the probe–catcher system, so its horizontal momentum need not be conserved. Expanding the boundary to include the station and ultimately its support can restore a larger accounting, but does not justify using the earlier two-body formula unchanged. State which external impulse is negligible and why."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: a conservation law is a claim about a specified system over a specified interval. You can now compare force, energy, and momentum methods by the information each requires and preserves. Rotation will later add angular momentum, with a similar need to examine external influence."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "physics-floor",
        "relationship": "Contact interactions become internal or external according to the selected boundary."
      },
      {
        "lessonId": "physics-launch",
        "relationship": "Work changes kinetic energy; impulse changes momentum. Integrating different quantities answers different questions."
      },
      {
        "lessonId": "calculus-total",
        "relationship": "Equal accumulated totals can conceal different force histories."
      }
    ],
    "sources": [
      {
        "label": "OpenStax University Physics 1 • Conservation of momentum",
        "url": "https://openstax.org/books/university-physics-volume-1/pages/9-3-conservation-of-linear-momentum",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "calculus-total",
    "topicId": "calculus-ii",
    "title": "The instrument remembers only the total",
    "subtitle": "Accumulation preserves a result while concealing its history.",
    "centralQuestion": "What does a definite integral preserve, and what information can it discard?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "PHLOX: This instrument records how much has crossed the boundary. Can we reconstruct when it crossed?",
          "DAZ: Not from the final reading alone. We could invent several histories consistent with it.",
          "PHLOX: Then let us try. If our accounts disagree but both match the instrument, the ambiguity belongs to the evidence.",
          "DAZ: We should also ask whether reverse flow subtracts from this reading.",
          "PHLOX: A small design decision with a rather large effect on what “total” means.",
          "Before continuing, draw two different nonnegative flow-rate graphs with equal area over the same interval."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "Accumulation begins with small contributions. If a rate is roughly constant over a short interval Δt, the contribution is approximately rate times Δt. Adding these products gives a Riemann sum. For an integrable function, refining the partition yields a definite integral. Continuous functions on closed bounded intervals are integrable.",
          "An integral is signed accumulation. A positive rate adds and a negative rate subtracts. Geometric area between a graph and an axis requires absolute values where the function is negative. The distinction has physical consequences: integrate velocity for displacement and speed for distance.",
          "Dimensions travel through the construction. A velocity in m/s multiplied by a time interval in s contributes metres. A force in N multiplied by a displacement in m contributes joules. “Area under a graph” is a geometric representation; the axes determine the physical meaning.",
          "The integral can be identical for very different functions. That is not a defect. It is what a total does: preserves one aspect of a history while discarding others. Do not infer peak rate or duration of individual events from a single total."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "Riemann sum: Σ f(t_i*) Δt_i",
          "Signed accumulation: ∫[a to b] f(t) dt",
          "Displacement=∫v(t)dt; distance=∫|v(t)|dt. For a<b, reversing limits changes the sign."
        ]
      },
      {
        "kind": "figure",
        "heading": "Inspect the representation",
        "body": [
          "The positive and negative triangular regions cancel for displacement. They add for total distance."
        ],
        "visual": {
          "type": "plot",
          "xLabel": "Time (s)",
          "yLabel": "Velocity (m/s)",
          "points": [
            [
              0,
              2
            ],
            [
              2,
              0
            ],
            [
              4,
              -2
            ]
          ]
        }
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "A probe travels at +3 m/s for 0≤t<2 s and −1 m/s for 2≤t≤5 s. The signed integral is 3(2)+(−1)(3)=3 m. The distance is 3(2)+1(3)=9 m. If x(0)=4 m, then x(5)=7 m. The integral supplies the change; the initial condition supplies the starting state.",
          "For a smooth example, ∫₀² t dt=[t²/2]₀²=2. A constant function f(t)=1 over the same interval also integrates to 2. One rises while the other stays level. Their endpoint totals agree, but their pointwise behavior does not.",
          "You can test additivity by splitting the interval at any intermediate point c: the total over [a,b] equals the total over [a,c] plus [c,b]. The pieces must retain their signs. This will become important when a velocity crosses zero or when a measurement changes regime."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "A meter may report cumulative throughput rather than signed net flow. In that case its rate is |q(t)|, not q(t), if q is the signed flow. Before evaluating an integral, determine what the instrument actually records. Correct integration cannot repair an incorrectly modeled quantity."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: an integral accumulates specified contributions over a specified variable. You can now investigate how the accumulated total itself changes when its endpoint moves. That question leads directly to the Fundamental Theorem of Calculus."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "physics-record",
        "relationship": "Both endpoint displacement and integrated velocity summarize net change while concealing the path."
      },
      {
        "lessonId": "calculus-rate",
        "relationship": "Moving the endpoint turns a definite total into a function whose derivative can recover the rate."
      }
    ],
    "sources": [
      {
        "label": "OpenStax Calculus 2 • Definite integral",
        "url": "https://openstax.org/books/calculus-volume-2/pages/1-2-the-definite-integral",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "calculus-rate",
    "topicId": "calculus-ii",
    "title": "Can the record reveal its own rate?",
    "subtitle": "A moving endpoint connects accumulation to instantaneous change.",
    "centralQuestion": "Why does differentiating an accumulation function recover its integrand?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "RAMIE: At each instant, I have a new accumulated total. It is no longer a single number.",
          "POKE: Then compare two nearby totals. What differs between them?",
          "RAMIE: Only the contribution from the short new interval.",
          "POKE: Divide that contribution by the interval length. What happens as the interval shrinks?",
          "RAMIE: If the rate is continuous there, the average over that interval approaches the rate at its endpoint.",
          "POKE: Now we have a reason for the theorem, rather than a password for using it."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "Define A(x)=∫ₐˣ f(t)dt. The symbol t is a dummy integration variable; x determines the upper endpoint. For small h, A(x+h)−A(x)=∫ₓˣ⁺ʰ f(t)dt. Dividing by h gives the average value of f over that short interval. If f is continuous at x, the average tends to f(x), so A′(x)=f(x).",
          "This explains one part of the Fundamental Theorem. Another part evaluates a definite integral using any antiderivative F: ∫ₐᵇf(x)dx=F(b)−F(a), under the usual continuity assumptions here. The endpoint subtraction is justified by the derivative–accumulation relationship, not by a definition that every integral must possess an elementary antiderivative.",
          "If the upper endpoint is g(x), apply the chain rule: the rate at the moving endpoint is multiplied by the rate at which that endpoint moves. If both endpoints move, subtract the lower endpoint’s contribution.",
          "A is not generally equal to f. A can increase while f decreases, provided f remains positive. A′ determines rising or falling; A″=f′ determines concavity where the derivatives exist."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "A(x)=∫[a to x] f(t)dt;    A′(x)=f(x), when f is continuous at x.",
          "d/dx ∫[a to g(x)] f(t)dt = f(g(x))g′(x)",
          "d/dx ∫[h(x) to g(x)] f(t)dt = f(g(x))g′(x)−f(h(x))h′(x)."
        ]
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "Let f(t)=2−t and A(x)=∫₀ˣ(2−t)dt on [0,4]. Evaluating gives A(x)=2x−x²/2. It rises until x=2, where A=2, then falls to A(4)=0. The accumulated function is concave down throughout because A″=−1. A(0)=0 follows from its construction, not from differentiating.",
          "Consider B(x)=∫₀ˣ²(1+t²)dt. The endpoint is x², so B′(x)=(1+x⁴)2x. You do not need to evaluate B first. Check by evaluating: B=x²+x⁶/3, whose derivative is 2x+2x⁵.",
          "A rate law alone leaves a family of possible states. If x′(t)=2−t, then x(t)=2t−t²/2+C. The observation x(0)=5 fixes C=5. An initial condition selects a member of the family."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "If f jumps, do not assume the derivative identity holds at the jump. For f=1 before x=1 and f=3 after x=1, its accumulation function is continuous but has a corner at 1. The one-sided slopes differ. The integral still exists; the differentiability conclusion needs its hypotheses."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: local change and accumulated change are connected through a limit. You can now justify changing variables in an integral, rather than treating substitution as symbol replacement."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "calculus-substitution",
        "relationship": "The chain rule for moving endpoints supplies the structure behind substitution."
      },
      {
        "lessonId": "physics-slope",
        "relationship": "Initial conditions restore the state information discarded by differentiation."
      }
    ],
    "sources": [
      {
        "label": "OpenStax Calculus 2 • Fundamental Theorem",
        "url": "https://openstax.org/books/calculus-volume-2/pages/1-3-the-fundamental-theorem-of-calculus",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "calculus-substitution",
    "topicId": "calculus-ii",
    "title": "Choose a coordinate that follows the change",
    "subtitle": "Substitution changes the description without changing the accumulated quantity.",
    "centralQuestion": "Why does a change of variable require both a differential factor and transformed bounds?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "CLARY: The expression contains a function inside another function, and beside it something resembling its derivative.",
          "POKE: Then the inner function may be a better coordinate.",
          "CLARY: May I simply replace the inner expression with u?",
          "POKE: Only if you also account for how a small change in x becomes a change in u.",
          "CLARY: So du is doing work. It is not a decorative ending.",
          "POKE: And a definite journey needs endpoints in the new coordinate."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "Substitution reverses the chain rule. If u=g(x), then differentiating F(g(x)) gives F′(g(x))g′(x). Integrating that product therefore recovers F(g(x)). The shorthand du=g′(x)dx keeps the change in small contributions visible. It is justified by the substitution theorem, not by unrestricted cancellation of symbols.",
          "For a definite integral, either transform both bounds to u and complete the calculation there, or find an antiderivative, substitute back to x, and then use the original bounds. Mixing u expressions with x endpoints loses the meaning of the definite integral.",
          "A good substitution reduces structure: an inner expression and its derivative become one variable and one differential. A constant mismatch is repairable by factoring. A variable mismatch may mean the proposed substitution is unhelpful, although it is sometimes possible to express the remaining variable in u.",
          "With nonmonotonic substitutions, signed bounds and the differential still matter. The direct chain-rule form works under suitable differentiability and continuity conditions even if g turns; more general variable changes may require splitting branches. For our first exercises, choose clear single-interval cases."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "∫ f(g(x))g′(x)dx = F(g(x))+C, where F′=f.",
          "∫[a to b] f(g(x))g′(x)dx = ∫[g(a) to g(b)] f(u)du",
          "Differentiate the result to check an indefinite integral. For a definite integral, also check sign, units where relevant, and endpoint order."
        ]
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "Evaluate I=∫₀¹2x(x²+1)³dx. Choose u=x²+1, so du=2x dx. At x=0, u=1; at x=1, u=2. Thus I=∫₁²u³du=[u⁴/4]₁²=15/4. The new bounds are not 0 and 1: those were positions in the old coordinate.",
          "For ∫x e^(x²)dx, the derivative of x² is 2x. Write x dx=du/2, obtaining ½e^(x²)+C. Differentiate: ½e^(x²)·2x=x e^(x²), confirming the factor.",
          "For ∫₀¹ x/(1+x²)dx, the same u=1+x² gives ½∫₁² du/u=½ln2. Different outer functions produce different antiderivatives even when the inner coordinate is the same."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "Try u=x² for ∫x²e^(x²)dx on x≥0. Since du=2x dx, a remaining factor of x becomes √u, giving ½∫√u e^u du. The change is legitimate on this branch but has not simplified the integral into a basic form. “I found a substitution” and “I found a useful substitution” are different achievements."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: a change of variable preserves an accumulation by transforming both the contribution and the interval. Integration by parts will use a different differentiation identity to move difficulty between factors."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "calculus-rate",
        "relationship": "Substitution follows the chain rule that also governs moving accumulation endpoints."
      },
      {
        "lessonId": "calculus-parts",
        "relationship": "The product rule offers a second way to reverse differentiation."
      },
      {
        "lessonId": "physics-launch",
        "relationship": "The work–energy derivation changes from position to velocity through a chain-rule relationship."
      }
    ],
    "sources": [
      {
        "label": "OpenStax Calculus 2 • Substitution",
        "url": "https://openstax.org/books/calculus-volume-2/pages/1-5-substitution",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "calculus-parts",
    "topicId": "calculus-ii",
    "title": "Move the difficulty somewhere useful",
    "subtitle": "A product can become easier when one factor is differentiated.",
    "centralQuestion": "How can the product rule exchange a difficult integral for a simpler one?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "POKE: Neither factor invites a useful substitution.",
          "ROOT: One becomes simpler when differentiated. The other is easy to integrate.",
          "POKE: Then perhaps the product rule tells us how to trade their roles.",
          "ROOT: Does any choice work?",
          "POKE: The identity works when its conditions do. Our choice determines whether the new integral is an improvement.",
          "Before the derivation, differentiate x eˣ. Locate the term whose integral we want and the extra term we would need to remove."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "The product rule says (uv)′=u′v+uv′. Rearranging and integrating gives ∫u dv=uv−∫v du. The boundary term uv is part of the answer. It records what must be subtracted after moving the derivative from one factor to the other.",
          "Choose u so differentiation simplifies it, and choose dv so its antiderivative v is available. This is a strategy, not a theorem guaranteeing every integral will simplify. Logarithms and inverse trigonometric functions often make useful u choices because their derivatives become algebraic. Polynomials paired with exponentials or trigonometric functions can simplify after repeated applications.",
          "For definite integrals, keep the boundary term evaluated at both endpoints and keep the remaining integral definite over the same interval. For indefinite integrals, one final arbitrary constant is sufficient; constants from intermediate choices of v can be absorbed into it.",
          "A useful check is structural: if your result has a product term but no compensating integral, differentiate it and inspect the unwanted extra term."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "∫u dv = uv − ∫v du",
          "∫[a to b]u(x)v′(x)dx = [u(x)v(x)]_a^b − ∫[a to b]v(x)u′(x)dx",
          "Derivation: integrate (uv)′=u′v+uv′, then rearrange."
        ]
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "For ∫x eˣdx, choose u=x and dv=eˣdx. Then du=dx and v=eˣ, so the result is x eˣ−eˣ+C. Its derivative is eˣ+x eˣ−eˣ=x eˣ. Choosing u=eˣ and dv=x dx instead would produce an integral with x²eˣ, increasing polynomial complexity.",
          "For ∫ln x dx on x>0, treat the integrand as ln x·1. Choose u=ln x and dv=dx. Then du=dx/x and v=x, giving x ln x−∫1 dx=x ln x−x+C. The invisible factor 1 was the useful second factor.",
          "For ∫₀¹x eˣdx, use [x eˣ]₀¹−∫₀¹eˣdx=e−(e−1)=1. The definite result can be simple even when intermediate terms are not.",
          "Repeated parts gives ∫x²eˣdx=x²eˣ−2∫x eˣdx=eˣ(x²−2x+2)+C. Each differentiation lowered the polynomial degree until the remaining integration became immediate."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "With ∫eˣcos x dx, repeated parts eventually returns the original integral. That need not be failure. If I=eˣcos x+eˣsin x−I, then 2I=eˣ(cos x+sin x), so I=½eˣ(cos x+sin x)+C. A cycle can yield an algebraic equation. Track signs carefully and verify the result."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: integration techniques are reversible differentiation structures, not unrelated tricks. You can now ask whether an identity can first transform an integrand into a form suitable for one of those structures."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "calculus-substitution",
        "relationship": "Compare reverse-chain-rule and reverse-product-rule structures before choosing a method."
      },
      {
        "lessonId": "calculus-identities",
        "relationship": "An identity can expose a substitution or direct antiderivative that was previously hidden."
      }
    ],
    "sources": [
      {
        "label": "OpenStax Calculus 2 • Integration by parts",
        "url": "https://openstax.org/books/calculus-volume-2/pages/3-1-integration-by-parts",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "calculus-identities",
    "topicId": "calculus-ii",
    "title": "When an identity changes the problem",
    "subtitle": "The same periodic quantity can have a more useful representation.",
    "centralQuestion": "How do trigonometric identities expose integrable structure?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "CONOY: We have measured a periodic signal, then squared its amplitude. Averaging the original signal gives zero.",
          "RAMIE: But squaring should not preserve that cancellation.",
          "CONOY: Our expression is sin²x. A substitution seems to leave an unwanted factor.",
          "RAMIE: Perhaps we should change the expression before changing the variable.",
          "CONOY: A useful distinction. An identity preserves every value, while revealing a different structure.",
          "Predict the average of sin²x over a full cycle before calculating. It must lie between zero and one; is there a symmetry that narrows it further?"
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "Trigonometric integrals often become simple when we reserve a factor that is the derivative of another function. In sin^m x cos^n x, an odd sine power lets us reserve sin x dx and convert the remaining sine squares using sin²x=1−cos²x. An odd cosine power similarly supplies cos x dx for u=sin x.",
          "When both powers are even, neither reserved derivative is available immediately. Half-angle identities reduce squares to constants and double-angle terms. Apply identities until the remaining terms are integrable; do not assume sin²x integrates like a plain power of x.",
          "For secant and tangent families, d(tan x)=sec²x dx and d(sec x)=sec x tan x dx suggest useful reserved factors. The identity sec²x=1+tan²x can convert remaining powers. This is another instance of matching a function and its derivative.",
          "These patterns guide a choice; they do not replace checking algebra, domains, and the derivative of the final expression. Trigonometric functions require angles in radians for the familiar derivative rules."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "sin²x+cos²x=1",
          "sin²x=(1−cos 2x)/2;    cos²x=(1+cos 2x)/2",
          "d(cos x)=−sin x dx; d(sin x)=cos x dx; d(tan x)=sec²x dx."
        ]
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "For ∫sin³x cos²x dx, reserve sin x dx and rewrite sin²x=1−cos²x. Put u=cos x, du=−sin x dx. The integral becomes −∫(1−u²)u²du=−u³/3+u⁵/5+C. Substitute back to get −cos³x/3+cos⁵x/5+C.",
          "For ∫sin²x dx, use ½∫(1−cos 2x)dx=x/2−sin 2x/4+C. The factor 1/4 includes both the half-angle coefficient and the chain-rule factor from integrating cos 2x. Over [0,2π], the integral is π, so the average value is π/(2π)=1/2.",
          "The same average follows from symmetry: sine squared and cosine squared have equal full-cycle integrals and sum to 1 pointwise. Each contributes half the cycle’s total length. This is a structural check independent of the antiderivative.",
          "For ∫tan³x sec²x dx, u=tan x gives ∫u³du=tan⁴x/4+C on any interval avoiding tangent’s singularities."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "For sin²x cos²x, both exponents are even. Use sin x cos x=½sin 2x, then square and apply a half-angle identity: sin²x cos²x=(1−cos 4x)/8. The integration is now direct. Similar-looking exponents can therefore require different first moves."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: an exact identity can expose a simpler accumulation without approximating the original quantity. The next lesson uses an identity geometrically, choosing a trigonometric coordinate to simplify a radical."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "calculus-substitution",
        "relationship": "Each reserved factor is chosen to make a complete variable change possible."
      },
      {
        "lessonId": "calculus-triangle",
        "relationship": "The same identities simplify square roots when a geometric coordinate is chosen."
      }
    ],
    "sources": [
      {
        "label": "OpenStax Calculus 2 • Trigonometric integrals",
        "url": "https://openstax.org/books/calculus-volume-2/pages/3-2-trigonometric-integrals",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "calculus-triangle",
    "topicId": "calculus-ii",
    "title": "A triangle hidden inside a radical",
    "subtitle": "A geometric coordinate can simplify an algebraic obstacle.",
    "centralQuestion": "Why do quadratic radicals suggest different trigonometric substitutions?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "CLARY: The boundary is circular, but the integral looks like a square root.",
          "POKE: Perhaps our Cartesian coordinate conceals the geometry.",
          "CLARY: If x=a sin θ, then the remaining height resembles a cos θ.",
          "POKE: Provided we choose a range where its sign is correct. A square root returns a nonnegative value.",
          "CLARY: Then √(cos²θ) is |cos θ|, not automatically cos θ.",
          "POKE: That small distinction will spare us a larger error when we return to x."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "Trigonometric substitution chooses a coordinate that matches a quadratic identity. For √(a²−x²), use x=a sin θ so the radical becomes a|cos θ|. For √(a²+x²), x=a tan θ gives a|sec θ|. For √(x²−a²), x=a sec θ gives a|tan θ|, with branch choices controlling signs. Assume a>0.",
          "The differential transforms too. For x=a sin θ, dx=a cos θ dθ. Simplifying only the radical while leaving dx unchanged does not produce an equivalent integral. Definite bounds must be transformed, and an indefinite result must return to the original variable.",
          "Choose ranges that make the substitution one-to-one on the interval being considered and make the relevant signs explicit. A right triangle is a convenient record for back-substitution, but the algebraic relationships are what justify it. Negative x or a different branch may require additional sign care.",
          "Before using trigonometry, complete the square if necessary. Expressions such as 9−(x−2)² reveal a shifted circular geometry. A substitution cannot eliminate the need to understand the original domain."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "√(a²−x²): x=a sin θ, usually −π/2≤θ≤π/2.",
          "√(a²+x²): x=a tan θ, usually −π/2<θ<π/2.",
          "√(x²−a²): choose a branch; for x≥a, use x=a sec θ with 0≤θ<π/2."
        ]
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "Evaluate ∫₀¹√(4−x²)dx. Choose x=2sin θ, so dx=2cos θ dθ. Bounds become θ=0 and θ=π/6. On this interval cos θ≥0, so the radical is 2cos θ. The integral becomes 4∫₀^(π/6)cos²θ dθ.",
          "Using the half-angle identity gives [2θ+sin 2θ]₀^(π/6)=π/3+√3/2. The result is positive and smaller than the bounding rectangle of width 1 and height 2, whose area is 2. That independent geometric bound catches some coefficient errors.",
          "For an indefinite form, the same calculation gives (x/2)√(4−x²)+2arcsin(x/2)+C on −2<x<2. The triangle or identity gives sin θ=x/2 and cos θ=√(4−x²)/2.",
          "Now consider ∫dx/√(x²+9). With x=3tan θ, the radical is 3sec θ on the chosen range and dx=3sec²θ dθ. The integral becomes ∫sec θ dθ=ln|sec θ+tan θ|+C, hence ln(x+√(x²+9))+C after absorbing a constant. The logarithm’s argument is positive for real x."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "The expression √(x²−4) is real only when |x|≥2. A substitution chosen for x≥2 does not silently describe x≤−2 using the same sign assumptions. This is why domain statements are part of a derivation. For a definite interval on the negative branch, explicitly choose a suitable substitution and inspect absolute values."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: a geometric identity and a carefully chosen domain can simplify a radical exactly. This opens later arc-length and volume investigations, where constructing the integral will matter as much as evaluating it."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "calculus-identities",
        "relationship": "Half-angle identities finish the integral after the radical is simplified."
      },
      {
        "lessonId": "calculus-substitution",
        "relationship": "The geometric coordinate still obeys the same differential and endpoint rules."
      }
    ],
    "sources": [
      {
        "label": "OpenStax Calculus 2 • Trigonometric substitution",
        "url": "https://openstax.org/books/calculus-volume-2/pages/3-3-trigonometric-substitution",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "calculus-fractions",
    "topicId": "calculus-ii",
    "title": "One fraction, several simpler mechanisms",
    "subtitle": "A complicated rational function can conceal simpler contributions.",
    "centralQuestion": "How can a rational function be decomposed into pieces with recognizable antiderivatives?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "DAZ: We can add these fractions easily. Can we reverse the process?",
          "CASSAVA: Only if we know what forms the pieces should have. An arbitrary guess could miss a term.",
          "DAZ: Then let the denominator’s factorization determine the possible pieces.",
          "CASSAVA: And multiply them back together before trusting the result.",
          "DAZ: A reconstruction test. I approve.",
          "Try to combine 1/x−1/(x+1) into one fraction. Notice that a rational function with two factors in its denominator may be simpler as a sum."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "For a rational function P(x)/Q(x), first compare polynomial degrees. If the numerator degree is at least the denominator degree, perform polynomial division. Decompose the remaining proper fraction after factoring its denominator over the reals.",
          "A distinct linear factor x−r requires a term A/(x−r). A repeated linear factor (x−r)^k requires all powers from 1 through k, each with its own constant numerator. An irreducible quadratic factor requires a linear numerator Ax+B; a constant alone is not general enough. Repeated quadratic factors likewise require a term at every power.",
          "Multiply the proposed identity by the common denominator, then determine unknown coefficients by matching powers or using convenient x values. The cleared polynomial identity can be evaluated at roots even though the original rational functions are undefined there. The identity is being extended after denominators have been removed.",
          "After decomposition, integrate each term using logarithms, power rules, substitution, or an inverse-trigonometric form. Keep domain restrictions. Logarithms from ∫dx/(x−r) require ln|x−r| on intervals avoiding the pole. Verify the reconstruction before integrating; verify the antiderivative afterward."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "1/[x(x+1)] = A/x + B/(x+1).",
          "Repeated factor: …/(x−r)² requires A/(x−r)+B/(x−r)².",
          "Irreducible quadratic: …/(x²+1) requires (Ax+B)/(x²+1)."
        ]
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "For (3x+5)/[(x+1)(x+2)], propose A/(x+1)+B/(x+2). Clearing denominators gives 3x+5=A(x+2)+B(x+1). At x=−1, A=2; at x=−2, B=1. Thus the integral is 2ln|x+1|+ln|x+2|+C on intervals avoiding −1 and −2.",
          "For 1/[x(x+1)²], use A/x+B/(x+1)+C/(x+1)². Clearing gives 1=A(x+1)²+Bx(x+1)+Cx. Setting x=0 gives A=1; x=−1 gives C=−1; matching x² gives B=−1. Integrating gives ln|x|−ln|x+1|+1/(x+1)+C₀.",
          "For (2x+3)/(x²+1), the denominator is irreducible over the reals. Split the numerator: ∫2x/(x²+1)dx=ln(x²+1), while ∫3/(x²+1)dx=3arctan x. The two numerator terms lead to different antiderivative structures.",
          "If the numerator were x²+1 and denominator x+1, divide first: x²+1=(x+1)(x−1)+2. The rational function is x−1+2/(x+1). Decomposition works on the remainder; polynomial division supplies the missing polynomial part."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "A pole inside a definite integration interval requires an improper-integral analysis. You cannot apply an antiderivative across the pole as if the function were continuous. For example, ∫₋₁¹1/x dx is not an ordinary convergent improper integral even though symmetric cancellation may suggest zero. We will distinguish such limits carefully in later lessons."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: algebraic reconstruction can reveal several elementary integration structures inside one expression. The existence of these techniques does not guarantee every useful integral has an elementary antiderivative. Approximation remains a mathematical method in its own right."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "calculus-substitution",
        "relationship": "Logarithmic terms are checked using the chain rule."
      },
      {
        "lessonId": "calculus-estimate",
        "relationship": "When symbolic methods do not yield a practical exact form, a definite integral can still be approximated with controlled error."
      }
    ],
    "sources": [
      {
        "label": "OpenStax Calculus 2 • Partial fractions",
        "url": "https://openstax.org/books/calculus-volume-2/pages/3-4-partial-fractions",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "calculus-estimate",
    "topicId": "calculus-ii",
    "title": "No exact answer. Still a defensible estimate.",
    "subtitle": "Refining a calculation is different from improving the evidence.",
    "centralQuestion": "How can we estimate an integral and distinguish numerical error from measurement uncertainty?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "The investigation",
        "body": [
          "An original educational dialogue using the Nomai characters from Outer Wilds. This imagined investigation is not game canon. The mechanics and mathematics below describe ordinary classical models; fictional warp technology is not evidence for real physics."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "At the scroll wall",
        "body": [
          "ROOT: The force instrument returned five readings. No exact formula accompanied them.",
          "RAMIE: We can connect neighboring readings and integrate those straight segments.",
          "PRIVET: That estimates a chosen interpolation. What justifies assuming nothing happened between samples?",
          "ROOT: We should distinguish a better calculation from better knowledge of the force.",
          "RAMIE: Then let us first test our numerical method on a function whose integral we know.",
          "Predict whether straight-line chords lie above or below a convex curve. That prediction should inform the sign of the trapezoidal error."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "Build the model",
        "body": [
          "The trapezoidal rule approximates a function between equally spaced samples with straight lines. Each segment contributes width times average endpoint height. Composite Simpson’s rule uses quadratic interpolation across pairs of equal-width subintervals; it requires an even number n of subintervals. Neither rule is an arbitrary average: its weights come from integrating the interpolating shapes.",
          "For a convex function, chords lie above the graph, so the trapezoidal approximation overestimates its integral. For a concave function it underestimates. Mixed curvature requires more careful analysis. Simpson’s rule is exact for polynomials of degree at most three, although it is constructed through quadratic interpolation.",
          "For a sufficiently smooth known function, derivative bounds provide guaranteed error bounds. If |f″|≤M₂ on [a,b], trapezoidal error magnitude is at most M₂(b−a)³/(12n²). If |f⁽⁴⁾|≤M₄, Simpson error magnitude is at most M₄(b−a)⁵/(180n⁴). These bounds need justified derivative bounds, not merely a smooth-looking plot.",
          "Two refined approximations agreeing is evidence of numerical stability, not a universal proof of accuracy. Sparse sampling can miss oscillation or a narrow spike. Data uncertainty, model uncertainty, and quadrature error are different sources of uncertainty."
        ]
      },
      {
        "kind": "equation",
        "heading": "The mathematical record",
        "body": [
          "h=(b−a)/n",
          "T_n=h[f₀/2+f₁+…+f_(n−1)+f_n/2]",
          "S_n=(h/3)[f₀+4f₁+2f₂+4f₃+…+4f_(n−1)+f_n], with even n.",
          "Absolute error=|approximation−exact value|. Relative error divides this by |exact value| when it is nonzero."
        ]
      },
      {
        "kind": "figure",
        "heading": "Inspect the representation",
        "body": [
          "Five force measurements. The connecting lines show the trapezoidal reconstruction, not additional measured values."
        ],
        "visual": {
          "type": "plot",
          "xLabel": "Position (m)",
          "yLabel": "Force (N)",
          "points": [
            [
              0,
              0
            ],
            [
              1,
              3
            ],
            [
              2,
              5
            ],
            [
              3,
              6
            ],
            [
              4,
              6
            ]
          ]
        }
      },
      {
        "kind": "worked",
        "heading": "Follow one case",
        "body": [
          "Use f(x)=x² on [0,2], with exact integral 8/3. For n=2, h=1 and samples are 0,1,4. T₂=1(0/2+1+4/2)=3. Its error is 1/3, an overestimate consistent with convexity. For n=4, samples are 0,0.25,1,2.25,4 and h=0.5. T₄=0.5(0+0.25+1+2.25+2)=2.75, with error 1/12.",
          "Halving h reduced this error by a factor of four. With f″=2, the bound is 2(2³)/(12n²), giving 1/3 for n=2 and 1/12 for n=4. Simpson with n=2 gives (1/3)(0+4·1+4)=8/3 exactly.",
          "Now treat the samples as forces in newtons at positions in metres. The same weighted sum estimates work in joules. Suppose readings at x=0,1,2,3,4 m are 0,3,5,6,6 N. T₄=0+3+5+6+3=17 J. This integrates the piecewise-linear reconstruction, not an experimentally proven true force function.",
          "If every force reading has bounded error ±0.2 N, the trapezoidal weights are nonnegative and sum to 4 m. Their measurement contribution is bounded by ±0.8 J. This does not bound unknown between-sample behavior. Collecting intermediate readings helps investigate that separate uncertainty."
        ]
      },
      {
        "kind": "challenge",
        "heading": "Change a condition",
        "body": [
          "A smooth curve can pass through every sample and still contain an unobserved narrow bump. A refinement that adds no actual measurements cannot discover it. Conversely, if a known analytic function has a justified curvature bound, you can choose n to guarantee a specified trapezoidal tolerance. The source of the function determines which accuracy claims are warranted."
        ]
      },
      {
        "kind": "record",
        "heading": "What this opens",
        "body": [
          "Established: approximation can carry a precise justification, but only when its assumptions are available. You can now investigate integrals lacking elementary antiderivatives, numerical motion models, and eventually convergence of infinite processes. Those are newly approachable questions, not claims that this one session establishes mastery."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "physics-launch",
        "relationship": "Integrating sampled force over position estimates the work used in an energy prediction."
      },
      {
        "lessonId": "calculus-total",
        "relationship": "Both quadrature and exact integration accumulate small contributions; the difference is how the limiting quantity is accessed."
      },
      {
        "lessonId": "calculus-fractions",
        "relationship": "An exact symbolic result can serve as a benchmark for a numerical method."
      }
    ],
    "sources": [
      {
        "label": "OpenStax Calculus 2 • Numerical integration",
        "url": "https://openstax.org/books/calculus-volume-2/pages/3-6-numerical-integration",
        "accessed": "2026-11-14",
        "note": "Free companion reading. Read the explanation and compare its representations with this original investigation."
      }
    ]
  },
  {
    "id": "before-the-verdict",
    "topicId": "prosocial-development",
    "title": "Before the verdict",
    "subtitle": "How can you respond to an ambiguous interaction without pretending to know another person’s mind?",
    "centralQuestion": "How can you respond to an ambiguous interaction without pretending to know another person’s mind?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A situation worth slowing down",
        "body": [
          "A classmate reads your project message and replies: “Fine.” You had spent an hour preparing it. You can observe a one-word reply; you cannot directly observe annoyance. Yet the next sentence you want to send already assumes you have been dismissed. Pause here: what exactly would that next sentence be defending?"
        ]
      },
      {
        "kind": "mechanism",
        "heading": "A model you can use",
        "body": [
          "Use three layers: observation, interpretation, response. Observation is the message available to both people. Interpretation is your proposed explanation. Response changes what happens next. Separating them gives you a place to revise the explanation before acting on it. This is a working communication model, not a method of diagnosing someone’s hidden motives. A possibility is not automatically a probability, and several possibilities need not deserve equal weight."
        ]
      },
      {
        "kind": "application",
        "heading": "Follow the case",
        "body": [
          "Try two hypotheses: the classmate dislikes the proposal, or the classmate is busy and approves it. “Which part needs changing before we submit?” is better than “Why are you always dismissive?” because it asks for actionable information without embedding a verdict. But it still assumes changes are needed. “Are you happy for us to submit this, or is there something you want changed?” makes the decision clearer. If the reply is “Submit it,” you have enough information for the task even though you have not solved the person’s mood."
        ]
      },
      {
        "kind": "application",
        "heading": "Change the condition",
        "body": [
          "Now suppose this person repeatedly agrees and later criticizes you for proceeding. The relevant evidence is no longer one word. You can describe the repeated coordination problem and propose explicit approval criteria. Uncertainty about intention does not require unlimited tolerance of impact. Direct language, written clarification, a pause, or choosing a different collaborator can all be reasonable. Facial expression and eye contact are not prerequisites for asking a clear question."
        ]
      },
      {
        "kind": "connection",
        "heading": "Use the model, then test its limits",
        "body": [
          "The situations in this lesson are constructed cases, not reports about particular people or institutions. Use them to rehearse a distinction before trying it in a setting you choose. The activities ask for reasoning you can inspect: an alternative explanation, a concrete decision, or a revision after conditions change. There is no single required personality or conversational style.",
          "Read the linked source for another treatment of the subject. Keep its claims separate from the teaching model offered here. When your own example does not fit, identify which assumption failed instead of forcing the example into the framework. Real-world follow-through can happen later; the required session ends after the two written activities."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "the-task-between-us",
        "relationship": "Move from interpreting an interaction to negotiating responsibility and repairing its effects. Each addresses a different stage; clarification alone does not fulfill an agreement."
      }
    ],
    "sources": [
      {
        "label": "Open University — Communication",
        "url": "https://www.open.edu/openlearn/money-business/leadership-management/the-importance-interpersonal-skills/content-section-1",
        "note": "Further reading on communication and clarification; task and repair frameworks here are original instructional models.",
        "accessed": "2026-11-14"
      }
    ]
  },
  {
    "id": "the-task-between-us",
    "topicId": "prosocial-development",
    "title": "The task between us",
    "subtitle": "What does it mean to take responsibility for a shared task?",
    "centralQuestion": "What does it mean to take responsibility for a shared task?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A situation worth slowing down",
        "body": [
          "The kitchen is clean when you return, but your housemate is upset. You washed the dishes yesterday. They planned meals, noticed supplies were low, asked you twice, and put everything away. Both of you can truthfully say you did work. The dispute is partly about which work counts."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "A model you can use",
        "body": [
          "Map a task as noticing, deciding, doing, checking, and closing the loop. This is a practical decomposition, not a universal division of household labor. A visible action may be only one component. Responsibility means agreeing who will carry which components and what completion looks like. Fairness also depends on capacity, time, preference, and consent; equal counts of tasks need not mean an equitable arrangement."
        ]
      },
      {
        "kind": "application",
        "heading": "Follow the case",
        "body": [
          "For taking out rubbish, define the trigger, owner, deadline, and finish condition: inspect the bin after dinner, remove it when full, replace the liner, and report a missing supply. Compare this with “Help more.” The concrete agreement can be remembered, disputed, and revised. The vague instruction leaves one person monitoring and prompting. Yet a checklist can become another burden if one person must maintain everyone else’s system. Decide together how reminders and exceptions will work."
        ]
      },
      {
        "kind": "application",
        "heading": "Change the condition",
        "body": [
          "Now the owner has an exam and cannot complete the task. Ownership does not mean never needing help. It includes communicating early enough to renegotiate. “Can you cover tonight? I can take your turn Thursday” supplies a proposal, not an entitlement. If capacity remains unequal, revisit the allocation rather than accumulating an invisible debt. People can decline; the shared problem still needs an explicit next step."
        ]
      },
      {
        "kind": "connection",
        "heading": "Use the model, then test its limits",
        "body": [
          "The situations in this lesson are constructed cases, not reports about particular people or institutions. Use them to rehearse a distinction before trying it in a setting you choose. The activities ask for reasoning you can inspect: an alternative explanation, a concrete decision, or a revision after conditions change. There is no single required personality or conversational style.",
          "Read the linked source for another treatment of the subject. Keep its claims separate from the teaching model offered here. When your own example does not fit, identify which assumption failed instead of forcing the example into the framework. Real-world follow-through can happen later; the required session ends after the two written activities."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "after-the-missed-promise",
        "relationship": "Move from interpreting an interaction to negotiating responsibility and repairing its effects. Each addresses a different stage; clarification alone does not fulfill an agreement."
      }
    ],
    "sources": [
      {
        "label": "Open University — Communication",
        "url": "https://www.open.edu/openlearn/money-business/leadership-management/the-importance-interpersonal-skills/content-section-1",
        "note": "Further reading on communication and clarification; task and repair frameworks here are original instructional models.",
        "accessed": "2026-11-14"
      }
    ]
  },
  {
    "id": "after-the-missed-promise",
    "topicId": "prosocial-development",
    "title": "After the missed promise",
    "subtitle": "How can an apology become a credible repair?",
    "centralQuestion": "How can an apology become a credible repair?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A situation worth slowing down",
        "body": [
          "You promised to review a friend’s application by Friday. On Saturday they ask whether you read it. You had an exhausting week. That explanation is real; so is the lost opportunity to find another reviewer. The question now is what your response allows them to do."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "A model you can use",
        "body": [
          "Separate acknowledging the event, recognizing its impact, offering a repair, and changing the process. These are prompts for thought, not a required script. An apology cannot compel forgiveness. Intention explains part of the event; impact explains why a response is needed. A useful repair should address the actual disruption and remain within your capacity."
        ]
      },
      {
        "kind": "application",
        "heading": "Follow the case",
        "body": [
          "“I said Friday and did not deliver or warn you. That left you waiting. I can review the introduction by noon today if it still helps; otherwise I understand. Next time I will confirm my capacity before agreeing.” Notice the bounded offer. Promising an even bigger favor to escape discomfort could repeat the original failure. Ask what remains useful rather than assuming your preferred repair is wanted."
        ]
      },
      {
        "kind": "application",
        "heading": "Change the condition",
        "body": [
          "Change the case: you have made the same promise and missed it four times. Better wording alone is weak evidence. Reduce the commitment, create a reliable checkpoint, or stop offering the task. Conversely, if someone demands unlimited availability as proof of remorse, you may acknowledge your mistake and decline that demand. Repair and boundaries can coexist."
        ]
      },
      {
        "kind": "connection",
        "heading": "Use the model, then test its limits",
        "body": [
          "The situations in this lesson are constructed cases, not reports about particular people or institutions. Use them to rehearse a distinction before trying it in a setting you choose. The activities ask for reasoning you can inspect: an alternative explanation, a concrete decision, or a revision after conditions change. There is no single required personality or conversational style.",
          "Read the linked source for another treatment of the subject. Keep its claims separate from the teaching model offered here. When your own example does not fit, identify which assumption failed instead of forcing the example into the framework. Real-world follow-through can happen later; the required session ends after the two written activities."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "before-the-verdict",
        "relationship": "Move from interpreting an interaction to negotiating responsibility and repairing its effects. Each addresses a different stage; clarification alone does not fulfill an agreement."
      }
    ],
    "sources": [
      {
        "label": "Open University — Communication",
        "url": "https://www.open.edu/openlearn/money-business/leadership-management/the-importance-interpersonal-skills/content-section-1",
        "note": "Further reading on communication and clarification; task and repair frameworks here are original instructional models.",
        "accessed": "2026-11-14"
      }
    ]
  },
  {
    "id": "one-claim-many-echoes",
    "topicId": "media-literacy",
    "title": "One claim, many echoes",
    "subtitle": "When do several sources amount to only one piece of evidence?",
    "centralQuestion": "When do several sources amount to only one piece of evidence?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A situation worth slowing down",
        "body": [
          "Five posts say a university has abolished exams. One links to a news story, two quote that story, one screenshots a quote, and one links to a student’s speculation. A crowded search page feels like corroboration. Draw the paths before counting the voices."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "A model you can use",
        "body": [
          "An evidence chain connects a claim to the material supporting it. Independent corroboration requires more than different URLs. Multiple outlets can accurately repeat the same mistaken account. Trace the strongest factual statement toward its original context, then ask what that context actually establishes. Primary material also needs interpretation: an official announcement may establish a policy while leaving its effects uncertain."
        ]
      },
      {
        "kind": "application",
        "heading": "Follow the case",
        "body": [
          "In this fictional case, the announcement replaces one department’s final written exam with a project for a single pilot term. The broad claim loses its university-wide scope and permanence. A careful conclusion is that a department is piloting a different assessment. You can preserve the interesting story while rejecting the exaggerated version. Record what remains unknown: whether the pilot continues and how students perform."
        ]
      },
      {
        "kind": "application",
        "heading": "Change the condition",
        "body": [
          "Caulfield’s SIFT approach supplies a useful search routine: pause, check the source, seek stronger coverage, and restore original context. Do not turn the routine into an endless investigation. A casual conversation and a consequential decision warrant different depth. If you cannot retrieve the original, state that limitation instead of treating absence as proof of falsehood."
        ]
      },
      {
        "kind": "connection",
        "heading": "Use the model, then test its limits",
        "body": [
          "The situations in this lesson are constructed cases, not reports about particular people or institutions. Use them to rehearse a distinction before trying it in a setting you choose. The activities ask for reasoning you can inspect: an alternative explanation, a concrete decision, or a revision after conditions change. There is no single required personality or conversational style.",
          "Read the linked source for another treatment of the subject. Keep its claims separate from the teaching model offered here. When your own example does not fit, identify which assumption failed instead of forcing the example into the framework. Real-world follow-through can happen later; the required session ends after the two written activities."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "the-denominator-disappeared",
        "relationship": "Trace the evidence, inspect the measurement, and examine how you encountered it. These are distinct checks: a reliable source can still be framed selectively."
      }
    ],
    "sources": [
      {
        "label": "Mike Caulfield — SIFT (2019)",
        "url": "https://hapgood.us/2019/06/19/sift-the-four-moves/",
        "note": "Further reading on source checking and original context; numerical and attention cases here are constructed exercises.",
        "accessed": "2026-11-14"
      }
    ]
  },
  {
    "id": "the-denominator-disappeared",
    "topicId": "media-literacy",
    "title": "The denominator disappeared",
    "subtitle": "How can a correct number support a misleading impression?",
    "centralQuestion": "How can a correct number support a misleading impression?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A situation worth slowing down",
        "body": [
          "A fictional headline says campus bicycle theft doubled. The annual counts are two and four. Another campus reports forty thefts and a ten-percent reduction. Which place is safer? Before answering, ask what populations, time periods, reporting practices, and exposure those totals represent."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "A model you can use",
        "body": [
          "A count describes events. A rate compares events with an appropriate denominator. Relative change compares a difference with its starting value: (new minus old) divided by old. From two to four is a 100 percent increase and two additional reports. Both statements are correct. Neither alone describes your chance of losing a bicycle. A denominator must match the question; total enrollment is not the same as bicycles parked overnight."
        ]
      },
      {
        "kind": "application",
        "heading": "Follow the case",
        "body": [
          "Suppose the first campus had 100 regularly parked bicycles and the second had 2,000. Four divided by 100 is 4 percent; forty divided by 2,000 is 2 percent. These are reports per regularly parked bicycle under the fictional definitions, not automatically probabilities for individual owners. Repeated thefts, different observation periods, or incomplete reports would complicate that interpretation. Precision in arithmetic cannot repair a poor measurement definition."
        ]
      },
      {
        "kind": "application",
        "heading": "Change the condition",
        "body": [
          "Now the first campus introduces easier online reporting. Reports increase even if theft incidence does not. That possibility does not prove the increase is artificial. It tells you to look for changes in measurement before making a causal claim. A graph can show a genuine change while a headline supplies an unsupported explanation."
        ]
      },
      {
        "kind": "connection",
        "heading": "Use the model, then test its limits",
        "body": [
          "The situations in this lesson are constructed cases, not reports about particular people or institutions. Use them to rehearse a distinction before trying it in a setting you choose. The activities ask for reasoning you can inspect: an alternative explanation, a concrete decision, or a revision after conditions change. There is no single required personality or conversational style.",
          "Read the linked source for another treatment of the subject. Keep its claims separate from the teaching model offered here. When your own example does not fit, identify which assumption failed instead of forcing the example into the framework. Real-world follow-through can happen later; the required session ends after the two written activities."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "the-next-click",
        "relationship": "Trace the evidence, inspect the measurement, and examine how you encountered it. These are distinct checks: a reliable source can still be framed selectively."
      }
    ],
    "sources": [
      {
        "label": "Mike Caulfield — SIFT (2019)",
        "url": "https://hapgood.us/2019/06/19/sift-the-four-moves/",
        "note": "Further reading on source checking and original context; numerical and attention cases here are constructed exercises.",
        "accessed": "2026-11-14"
      }
    ]
  },
  {
    "id": "the-next-click",
    "topicId": "media-literacy",
    "title": "The next click",
    "subtitle": "How can you investigate what an attention environment invites you to do?",
    "centralQuestion": "How can you investigate what an attention environment invites you to do?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A situation worth slowing down",
        "body": [
          "You open a familiar creator’s page with no specific question. An hour later, you have enjoyed three videos but cannot recall deciding to watch the second. Removing recommendations did not remove the route from familiarity to another click. This case asks about a sequence of actions, not whether entertainment deserves to exist."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "A model you can use",
        "body": [
          "Describe a local loop: cue, available action, immediate payoff, next cue. This is an observation framework, not a clinical diagnosis or a complete theory of behavior. List what the environment makes easy and what requires a fresh decision. Creator intention, platform incentives, and your own preferences are separate variables. You cannot infer all three from your experience alone."
        ]
      },
      {
        "kind": "application",
        "heading": "Follow the case",
        "body": [
          "Compare two entrances. In A, the bookmark opens a channel’s uploads. In B, a note names one selected video and the question you want it to answer. The content can be identical while the starting condition differs. A stopping point can be “I have answered the question” or simply “I chose one episode for enjoyment.” You need not justify leisure by extracting knowledge. The experiment concerns whether your actual session matches your chosen purpose."
        ]
      },
      {
        "kind": "application",
        "heading": "Change the condition",
        "body": [
          "Change one condition at a time if you want to learn from the comparison. A calmer week, different video, and new bookmark all at once leave several explanations. A tiny experiment can suggest a useful adjustment without proving a general cause. Long engagement with Ship’s Log likewise needs evidence of thinking or application before you call it learning."
        ]
      },
      {
        "kind": "connection",
        "heading": "Use the model, then test its limits",
        "body": [
          "The situations in this lesson are constructed cases, not reports about particular people or institutions. Use them to rehearse a distinction before trying it in a setting you choose. The activities ask for reasoning you can inspect: an alternative explanation, a concrete decision, or a revision after conditions change. There is no single required personality or conversational style.",
          "Read the linked source for another treatment of the subject. Keep its claims separate from the teaching model offered here. When your own example does not fit, identify which assumption failed instead of forcing the example into the framework. Real-world follow-through can happen later; the required session ends after the two written activities."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "one-claim-many-echoes",
        "relationship": "Trace the evidence, inspect the measurement, and examine how you encountered it. These are distinct checks: a reliable source can still be framed selectively."
      }
    ],
    "sources": [
      {
        "label": "Mike Caulfield — SIFT (2019)",
        "url": "https://hapgood.us/2019/06/19/sift-the-four-moves/",
        "note": "Further reading on source checking and original context; numerical and attention cases here are constructed exercises.",
        "accessed": "2026-11-14"
      }
    ]
  },
  {
    "id": "a-place-to-return",
    "topicId": "modern-career-networking",
    "title": "A place to return",
    "subtitle": "How do you choose a professional community worth returning to?",
    "centralQuestion": "How do you choose a professional community worth returning to?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A situation worth slowing down",
        "body": [
          "A student joins six technical groups, introduces themselves once in each, and feels invisible. Another attends one project’s discussion repeatedly and begins recognizing recurring problems. Neither pattern guarantees an opportunity. The second at least creates shared context that a later conversation can use."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "A model you can use",
        "body": [
          "Treat a community as people, recurring work, participation rules, and routes for newcomers. Membership alone says little about fit. Examine whether its actual work interests you, whether newcomers can participate safely and respectfully, and whether the time required is sustainable. This is a selection framework, not a promise that persistence produces friendship or employment."
        ]
      },
      {
        "kind": "application",
        "heading": "Follow the case",
        "body": [
          "Imagine two options: a large general career chat and a small Linux documentation group. The chat may offer broad exposure; the documentation group may let you use a tool, notice an unclear instruction, and ask a grounded question. For someone curious about Linux, the second has a concrete entry point. For someone exploring unrelated fields, the broader space could fit better. Choose based on the question you want to pursue, not prestige alone."
        ]
      },
      {
        "kind": "application",
        "heading": "Change the condition",
        "body": [
          "Now the small group expects unpaid work every weekend and responds dismissively to beginners. Shared interests do not cancel poor conditions. You can observe, leave, or seek another setting. Contribution is voluntary; repeated contact is useful only when the environment warrants it. No current platform list can substitute for inspecting how people actually interact."
        ]
      },
      {
        "kind": "connection",
        "heading": "Use the model, then test its limits",
        "body": [
          "The situations in this lesson are constructed cases, not reports about particular people or institutions. Use them to rehearse a distinction before trying it in a setting you choose. The activities ask for reasoning you can inspect: an alternative explanation, a concrete decision, or a revision after conditions change. There is no single required personality or conversational style.",
          "Read the linked source for another treatment of the subject. Keep its claims separate from the teaching model offered here. When your own example does not fit, identify which assumption failed instead of forcing the example into the framework. Real-world follow-through can happen later; the required session ends after the two written activities."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "make-the-work-readable",
        "relationship": "Connect finding a setting, explaining work, and offering a bounded return. These create shared context at different stages without guaranteeing an opportunity."
      }
    ],
    "sources": [
      {
        "label": "GitHub Open Source Guides — How to contribute",
        "url": "https://opensource.guide/how-to-contribute/",
        "note": "Further reading on collaborative participation; community selection and project explanation frameworks here are instructional models.",
        "accessed": "2026-11-14"
      }
    ]
  },
  {
    "id": "make-the-work-readable",
    "topicId": "modern-career-networking",
    "title": "Make the work readable",
    "subtitle": "What lets a stranger understand the value and limits of your work?",
    "centralQuestion": "What lets a stranger understand the value and limits of your work?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A situation worth slowing down",
        "body": [
          "You say, “I built a learning website.” A listener says, “Cool,” and the conversation stops. They have not seen the decisions hidden inside that sentence: stable lesson identities, review records, or the tension between sustained exploration and passive consumption. An impressive adjective would reveal less than one concrete design choice."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "A model you can use",
        "body": [
          "A useful project account connects problem, decision, evidence, and limitation. The problem gives someone a reason to care. The decision reveals your reasoning. Evidence distinguishes intended behavior from observed behavior. A limitation creates an honest opening for discussion. This structure is a practical communication tool, not a requirement to brand every hobby."
        ]
      },
      {
        "kind": "application",
        "heading": "Follow the case",
        "body": [
          "For a fictional review site: “Returning learners needed their old notes to remain meaningful. I gave each lesson a permanent ID and stored visits separately. I checked that a new visit preserved the earlier note. I have not established whether this improves long-term retention.” The last sentence protects the distinction between software behavior and educational effectiveness. You can invite feedback on the data model without claiming to have solved learning."
        ]
      },
      {
        "kind": "application",
        "heading": "Change the condition",
        "body": [
          "Now your listener is a teacher rather than a programmer. Keep the same evidence and change the entry point: explain why stable material matters for comparing reflections before discussing IDs. Adapting the explanation is not inventing achievements. If work was collaborative, identify your contribution and the team’s contribution separately. Omit credentials, personal records, and private user data from public examples."
        ]
      },
      {
        "kind": "connection",
        "heading": "Use the model, then test its limits",
        "body": [
          "The situations in this lesson are constructed cases, not reports about particular people or institutions. Use them to rehearse a distinction before trying it in a setting you choose. The activities ask for reasoning you can inspect: an alternative explanation, a concrete decision, or a revision after conditions change. There is no single required personality or conversational style.",
          "Read the linked source for another treatment of the subject. Keep its claims separate from the teaching model offered here. When your own example does not fit, identify which assumption failed instead of forcing the example into the framework. Real-world follow-through can happen later; the required session ends after the two written activities."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "a-small-useful-return",
        "relationship": "Connect finding a setting, explaining work, and offering a bounded return. These create shared context at different stages without guaranteeing an opportunity."
      }
    ],
    "sources": [
      {
        "label": "GitHub Open Source Guides — How to contribute",
        "url": "https://opensource.guide/how-to-contribute/",
        "note": "Further reading on collaborative participation; community selection and project explanation frameworks here are instructional models.",
        "accessed": "2026-11-14"
      }
    ]
  },
  {
    "id": "a-small-useful-return",
    "topicId": "modern-career-networking",
    "title": "A small, useful return",
    "subtitle": "How can one conversation become a responsible next step?",
    "centralQuestion": "How can one conversation become a responsible next step?",
    "sections": [
      {
        "kind": "narrative",
        "heading": "A situation worth slowing down",
        "body": [
          "After a workshop, someone mentions that their setup guide confuses new users. You want to stay in touch. “Let me know if you ever need anything” is friendly, but leaves them defining the task and remembering your offer. You could instead propose testing one section with a fresh installation—if that is work you can actually do."
        ]
      },
      {
        "kind": "mechanism",
        "heading": "A model you can use",
        "body": [
          "A bounded offer names the object, effort, deliverable, and permission needed. It lowers uncertainty for both people. Open-source contribution guidance emphasizes reading project instructions, choosing suitable work, and responding to feedback. That guidance concerns collaborative projects; it does not mean every professional conversation should become free labor."
        ]
      },
      {
        "kind": "application",
        "heading": "Follow the case",
        "body": [
          "“Your note about the setup guide interested me. I can spend thirty minutes following the first section and send a short list of unclear steps. Would that help?” This is specific and easy to decline. If accepted, report the environment, exact step, expected result, and observation. Avoid sending a large unsolicited redesign. A useful return can also be a relevant resource or a thoughtful answer rather than a work product."
        ]
      },
      {
        "kind": "application",
        "heading": "Change the condition",
        "body": [
          "Now there is no reply. You do not know whether the person is busy, uninterested, or missed the message. One proportionate follow-up may be reasonable depending on context; repeated messages do not create an obligation. If you cannot fulfill an accepted offer, say so promptly and release the task. The aim is a reliable interaction, not a debt you can redeem for an introduction."
        ]
      },
      {
        "kind": "connection",
        "heading": "Use the model, then test its limits",
        "body": [
          "The situations in this lesson are constructed cases, not reports about particular people or institutions. Use them to rehearse a distinction before trying it in a setting you choose. The activities ask for reasoning you can inspect: an alternative explanation, a concrete decision, or a revision after conditions change. There is no single required personality or conversational style.",
          "Read the linked source for another treatment of the subject. Keep its claims separate from the teaching model offered here. When your own example does not fit, identify which assumption failed instead of forcing the example into the framework. Real-world follow-through can happen later; the required session ends after the two written activities."
        ]
      }
    ],
    "connections": [
      {
        "lessonId": "a-place-to-return",
        "relationship": "Connect finding a setting, explaining work, and offering a bounded return. These create shared context at different stages without guaranteeing an opportunity."
      }
    ],
    "sources": [
      {
        "label": "GitHub Open Source Guides — How to contribute",
        "url": "https://opensource.guide/how-to-contribute/",
        "note": "Further reading on collaborative participation; community selection and project explanation frameworks here are instructional models.",
        "accessed": "2026-11-14"
      }
    ]
  },
  {
    "id": "a-mass-between-readings",
    "topicId": "calculus-ii",
    "title": "What lies between the readings?",
    "subtitle": "Three measurements, two mass estimates, and a model that may be too convenient.",
    "centralQuestion": "When does adding small pieces establish a total—and when does it establish only the consequence of an assumption?",
    "materials": [
      {
        "label": "The instrument record and partition bench",
        "access": "Supplied on this page. All required measurements and equations are included; no physical apparatus, account, or installation is needed."
      },
      {
        "label": "A way to sketch and calculate",
        "access": "Pen and paper, or a notes app. A basic calculator is optional. The on-page bench checks the finite-sum arithmetic; the explanations and paper fallback also work without it."
      }
    ],
    "sections": [
      {
        "kind": "record",
        "heading": "A sealed object and an unfinished argument",
        "body": [
          "An original imagined investigation with the Nomai characters from Outer Wilds. The mathematics is ordinary real-variable calculus; the record is a constructed case.",
          "A two-metre rod lies inside a sealed inspection chamber. A scanner can estimate the mass per unit length near a chosen position. It cannot weigh the whole rod. Its surviving record gives three readings: at x=0 m, 1 kg/m; at x=1 m, 2 kg/m; at x=2 m, 3 kg/m. Two researchers have written incompatible totals beside it: 3 kg and 5 kg. Neither has shown the calculation.",
          "RAMIE has drawn a straight line through the readings. POKE has circled the blank space between them. CLARY has left room for a third result. None of these marks tells us what is actually inside the chamber."
        ],
        "probe": "Sketch a density curve consistent with all three readings. Can you sketch another? Propose how someone could obtain 3 kg and someone else 5 kg. Before reading on, write one thing the record establishes and one thing you are assuming."
      },
      {
        "kind": "record",
        "heading": "A provisional map of the expedition",
        "body": [
          "Our opening map has missing relationships: position → local density → a small contribution → an accumulated total. The scanner supplies some local information. The unexplained arrows are where the investigation begins.",
          "Farther out, the map branches. Could an antiderivative give an exact total? Can a change of variable reveal a simpler description? What if the object is curved, the domain unbounded, or the contributions form an infinite series? Could a polynomial approximate the whole relationship? These are the course’s territories, not vocabulary you must master before starting.",
          "For now, follow one arrow: how does a density reading become the mass of a piece? Keep the rest of the map available as questions. We will return to it after the model changes."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "What is the scanner measuring?",
        "body": [
          "CLARY: One kilogram per metre is not one kilogram. What length did the first researcher assign to that reading?",
          "RAMIE: Perhaps the rod was divided into two one-metre pieces. The left edge of the first reads 1; the left edge of the second reads 2.",
          "POKE: That gives three kilograms if each edge reading represents its whole piece.",
          "CLARY: The right edges read 2 and 3. Five kilograms. Both calculations contain the same unspoken operation.",
          "RAMIE: Replace an uneven piece with a uniform one, then add its mass.",
          "POKE: An intelligible approximation. We still owe an argument about its error."
        ]
      },
      {
        "kind": "investigation",
        "heading": "The small contribution",
        "body": [
          "Linear density λ(x) describes mass per unit length near position x. The Greek letter λ is read “lambda.” For a uniform piece of length Δx, its mass is density times length. If density changes within the piece, choosing one representative reading makes that product an approximation.",
          "The units carry the mechanism: (kg/m) × m = kg. Adding density readings without lengths would still give kg/m, not a mass. This is why the width of a slice matters as much as the height of a graph.",
          "Adopt Ramie’s candidate model: density increases linearly from 1 to 3 kg/m over two metres. When x is entered numerically in metres, write λ(x)=1+x kg/m. Dimensionally, the complete expression is λ(x)=(1 kg/m)+(1 kg/m²)x. The three observations fit this law, but do not establish it between the observed points.",
          "Inside that model, density is nonnegative and increasing. On any piece, its left-edge density is the minimum and its right-edge density the maximum. Multiplying by the positive piece length therefore gives lower and upper mass estimates. This bounding argument uses monotonicity throughout each piece. Three readings alone do not justify that assumption."
        ]
      },
      {
        "kind": "equation",
        "heading": "A sum with its assumptions visible",
        "body": [
          "For a representative position xᵢ* in piece i: Δmᵢ ≈ λ(xᵢ*) Δxᵢ.",
          "For n equal pieces over 0≤x≤2 m: Δx=2/n m.",
          "Lₙ=Σᵢ₌₀ⁿ⁻¹ λ(iΔx)Δx; Rₙ=Σᵢ₌₁ⁿ λ(iΔx)Δx.",
          "For the assumed increasing density: Lₙ ≤ M ≤ Rₙ. The symbol Σ means add the indexed terms; M denotes total mass. These bounds are claims inside the stated density model."
        ]
      },
      {
        "kind": "record",
        "heading": "Try to narrow the disagreement",
        "body": [
          "For two pieces, the left approximation uses densities 1 and 2 with widths 1 m, giving 3 kg. The right approximation uses 2 and 3, giving 5 kg. Both are now explained without calling either an exact mass.",
          "On paper, divide the rod into four pieces. Their boundaries are x=0, 0.5, 1, 1.5, 2 m. The corresponding model densities are 1, 1.5, 2, 2.5, 3 kg/m. Decide which four enter each sum. Remember the width is now 0.5 m."
        ],
        "probe": "Predict the four-piece lower and upper estimates and calculate them before using the bench. Will increasing the number of pieces make each estimate increase, decrease, or stay fixed? Why might midpoint sampling behave differently?"
      },
      {
        "kind": "density-lab",
        "heading": "The partition bench",
        "body": [
          "This bench evaluates the stated linear model, not the unknown physical rod. Change the number of pieces and the sampling position. The rectangle total is the finite sum; the smooth line represents the candidate density law.",
          "Paper fallback: for n=4, multiply each selected density by 0.5 m and add. For n=8, use boundaries 0, 0.25, 0.5, …, 2 m and widths 0.25 m. Use the left boundary, right boundary, or centre of every piece consistently. No observation is added by changing a setting on this mathematical model."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "The numbers approach one another",
        "body": [
          "RAMIE: With four pieces I obtain 3.5 kg from the left and 4.5 kg from the right.",
          "CLARY: With eight, 3.75 and 4.25. The disagreement has halved.",
          "POKE: That is promising. A pattern in three calculations is not yet a proof about every refinement.",
          "RAMIE: Then let us account for the whole gap at once. Each right rectangle exceeds its left companion.",
          "CLARY: Most density terms cancel when we subtract the totals. Only the two end readings remain.",
          "POKE: Now the refinement has an explanation."
        ]
      },
      {
        "kind": "investigation",
        "heading": "A limit you can justify",
        "body": [
          "Subtract the two equal-width sums. Every interior density appears once positively and once negatively. The difference is Rₙ−Lₙ=Δx[λ(2)−λ(0)]=(2/n m)(2 kg/m)=4/n kg. It tends to zero as n grows.",
          "For this linear model, the average of the first and last left-sample densities is 2−1/n kg/m. Multiplying by the full length gives Lₙ=4−2/n kg. Similarly Rₙ=4+2/n kg. Both approach 4 kg. Since the model mass lies between them for every n, the only possible value is 4 kg.",
          "The definite integral names the limiting accumulation: M=∫₀²λ(x) dx=4 kg. It is not the sum of densities at infinitely many zero-width points. It is the limit of finite sums of density-times-length contributions. No antiderivative was needed for this argument.",
          "More generally, continuous densities on a closed bounded interval have a well-defined Riemann integral. As the largest piece width tends to zero, representative-point sums approach the same total. Monotonicity made our simple endpoint bounds available; continuity provides a broader integrability guarantee. We have not proved that general theorem here.",
          "Midpoint sampling happens to give exactly 4 kg for every equal partition of this linear function. The average of a linear function over a piece equals its value at the centre. That is a special structural fact, not a promise that midpoint sampling always yields an exact answer."
        ]
      },
      {
        "kind": "record",
        "heading": "A different coordinate, the same rod",
        "body": [
          "The scanner is switched to centimetres. The rod is now 200 cm long. Would summing 200 times the old density readings preserve mass? First check the units. A density of 1 kg/m is 0.01 kg/cm. A shorter numerical unit requires a smaller density number.",
          "With y measured in centimetres, x=y/100 metres. The same physical density law has numerical form μ(y)=0.01+0.0001y kg/cm. The accumulated contribution μ(y)Δy equals λ(x)Δx for matching pieces. You changed a representation, not the rod.",
          "This is a first glimpse of substitution. Later, a useful coordinate change may simplify an expression rather than merely convert units. The invariant is the contribution being accumulated; a variable name and its differential must change together."
        ]
      },
      {
        "kind": "dialogue",
        "heading": "The empty space in the record",
        "body": [
          "CLARY: Four kilograms. Have we determined what is inside?",
          "POKE: We have determined the mass implied by a linear density law.",
          "RAMIE: The three readings all support that law.",
          "POKE: They are consistent with it. Imagine extra material concentrated halfway along the first metre, tapering to nothing at its two ends. The scanner’s three recorded positions would miss it.",
          "CLARY: Refining our calculation would keep reporting four kilograms if we kept supplying the original law.",
          "RAMIE: Then the bench can make our arithmetic more certain without making our account of the chamber more complete."
        ]
      },
      {
        "kind": "investigation",
        "heading": "A supplied counterexample",
        "body": [
          "Keep the original density and add a triangular bump over 0≤x≤1 m. The extra density is zero at x=0, rises linearly to 2 kg/m at x=0.5 m, then falls linearly to zero at x=1 m; it stays zero from 1 to 2 m. The extra mass is the triangle’s area: ½(1 m)(2 kg/m)=1 kg.",
          "This new density agrees with all three recorded readings at x=0,1,2 m, but its total mass is 5 kg. Thus those readings do not uniquely determine the true total. The earlier 3-to-5 kg bounds were derived for the increasing linear model; do not transfer them to arbitrary densities that merely match the samples. A still larger hidden bump could exceed 5 kg.",
          "Sampling x=0.5 m would distinguish these two particular models. It would not prove that no other unobserved variation exists. Further evidence or justified physical constraints are needed. We can make a precise mathematical conclusion and retain an empirical uncertainty at the same time."
        ]
      },
      {
        "kind": "record",
        "heading": "Return to the map",
        "body": [
          "Position → local density: the instrument has supplied three observations; a continuous law between them remains a theory. Local density → small mass: multiply by a piece length, tracking units. Small masses → total: finite sums approach a definite integral when the model supports that limit.",
          "Our opening 3 kg and 5 kg inscriptions now have a mechanism. They were two approximations under one candidate law. The value 4 kg has a different status: exact within that law, not established for every object compatible with the sparse record.",
          "Three branches of the expedition are newly approachable. Move the upper endpoint and ask how the accumulated mass changes: this leads to the Fundamental Theorem. Bend the density curve and ask how quickly midpoint estimates improve: this leads to numerical error. Weight each contribution by its location and ask where the rod balances: this leads to moments.",
          "The wider course will repeatedly revisit this distinction: evaluating a model, choosing its representation, and justifying that it describes the system are related tasks with different evidence. In the visit log, preserve your current theory and a question still worth testing. Uncertainty about a branch is part of the map."
        ]
      }
    ],
    "connections": [],
    "sources": [
      {
        "label": "OpenStax Calculus Volume 2 • Approximating Areas",
        "url": "https://openstax.org/books/calculus-volume-2/pages/1-1-approximating-areas",
        "accessed": "2026-11-15",
        "note": "Free companion treatment of finite sums and refinement; the chamber record and calculations here are original teaching examples."
      },
      {
        "label": "OpenStax Calculus Volume 2 • Moments and Centers of Mass",
        "url": "https://openstax.org/books/calculus-volume-2/pages/2-6-moments-and-centers-of-mass",
        "accessed": "2026-11-15",
        "note": "Further reading on distributed mass; balancing and moments are open continuations, not prerequisites or required exercises."
      },
      {
        "label": "Calculus II expedition map",
        "url": "https://github.com/lcstradling-boop/individual-learning-mechanism/blob/main/coordination/courses/calculus-ii.md",
        "accessed": "2026-11-15",
        "note": "The rebuilt course design, including integration techniques, geometry, infinite processes, series, Taylor models, and parametric/polar curves."
      }
    ]
  }
];
