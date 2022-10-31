window.BENCHMARK_DATA = {
  "lastUpdate": 1667227028134,
  "repoUrl": "https://github.com/discordeno/discordeno",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "48591478+H01001000@users.noreply.github.com",
            "name": "Jonathan Ho",
            "username": "H01001000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a1a41fac854d141d2375018c44acb8cc2bf1cc9",
          "message": "CI: Run benchmark  (#2563)\n\n* fix(bench): try to fix benchmark\r\n\r\n* style: deno fmt\r\n\r\n* fix: remove check formating\r\n\r\n* fix: add fake token\r\n\r\n* fix: tranform\r\n\r\n* deno fmt\r\n\r\n* add parseFloat\r\n\r\n* fix unit\r\n\r\n* refactor: change fetch target to benchrepo\r\n\r\n* fix: oldBot\r\n\r\n* refactor: use custom input\r\n\r\n* ci: add tee\r\n\r\n* style: deno fmt\r\n\r\n* ci: cache deps\r\n\r\n* chore: remove\r\n\r\n* ci: add memory benchmark\r\n\r\n* fix: fix url for main repo\r\n\r\n* deno fmt\r\n\r\n* ci: add comment-always\r\n\r\n* fix: link\r\n\r\n* just trying trigger\r\n\r\n* ci: only push on main\r\n\r\n* fix: type\r\n\r\n* fix: range\r\n\r\n* fixed\r\n\r\n* style: deno fmt\r\n\r\n* fix: path\r\n\r\n* Add upload output\r\n\r\n* style: deno fmt\r\n\r\n* ci: add create branch on pr owner's repo\r\n\r\n* fix: github.repository\r\n\r\n* ci: fix remove id benchmark-action\r\n\r\n* fix\r\n\r\n* fix: type\r\n\r\n* reverse change\r\n\r\n* ci: add cache\r\n\r\n* feat: add using cache\r\n\r\n* bench: update name and ignore previous when ci\r\n\r\n* style: name\r\n\r\n* feat: fix pr message style\r\n\r\n* add more benchmark\r\n\r\n* deno fmt\r\n\r\n* fix\r\n\r\n* fix: wording\r\n\r\n* chore: only run on success\r\n\r\n* fix: used last head as current commit",
          "timestamp": "2022-10-29T14:22:23-05:00",
          "tree_id": "3bde0cf961a4c8f8fabc377c1a867e58231d2a7c",
          "url": "https://github.com/discordeno/discordeno/commit/7a1a41fac854d141d2375018c44acb8cc2bf1cc9"
        },
        "date": 1667071398642,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 1430,
            "unit": "ns/iter",
            "range": "1230 … 1460"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 142,
            "unit": "ns/iter",
            "range": "138.48 … 200.42"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 132,
            "unit": "ns/iter",
            "range": "128.46 … 141.39"
          },
          {
            "name": "[Transformer] Discord Rules to a Rules",
            "value": 470,
            "unit": "ns/iter",
            "range": "463.38 … 728.33"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 1300,
            "unit": "ns/iter",
            "range": "1290 … 1310"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 617,
            "unit": "ns/iter",
            "range": "608.79 … 662.78"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 463,
            "unit": "ns/iter",
            "range": "458.11 … 481.44"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 489,
            "unit": "ns/iter",
            "range": "484.57 … 503.27"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 502,
            "unit": "ns/iter",
            "range": "496.39 … 569.93"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 275.04,
            "unit": "MB",
            "range": "271.32 … 276.93"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 257.51,
            "unit": "MB",
            "range": "255.5 … 260.19"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 275.48,
            "unit": "MB",
            "range": "271.31 … 278.75"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48591478+H01001000@users.noreply.github.com",
            "name": "Jonathan Ho",
            "username": "H01001000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd82b12c170eda28f129cdc87cbbb095d521d28e",
          "message": "Fix Ci (#2565)\n\n* fix: Validate not running cron\r\n\r\n* fix: always upload artifact\r\n\r\n* fix: generate fail on first comment",
          "timestamp": "2022-10-29T14:45:58-05:00",
          "tree_id": "ee5b8f3560a733536c86e420437e2d81be17405c",
          "url": "https://github.com/discordeno/discordeno/commit/fd82b12c170eda28f129cdc87cbbb095d521d28e"
        },
        "date": 1667072813856,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 1820,
            "unit": "ns/iter",
            "range": "1770 … 1920"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 128,
            "unit": "ns/iter",
            "range": "115.81 … 160.52"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 124,
            "unit": "ns/iter",
            "range": "112.77 … 140.17"
          },
          {
            "name": "[Transformer] Discord Rules to a Rules",
            "value": 409,
            "unit": "ns/iter",
            "range": "387.66 … 626.77"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 1140,
            "unit": "ns/iter",
            "range": "1110 … 1160"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 545,
            "unit": "ns/iter",
            "range": "525.85 … 558.21"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 419,
            "unit": "ns/iter",
            "range": "408.69 … 426.17"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 432,
            "unit": "ns/iter",
            "range": "417.24 … 446.19"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 442,
            "unit": "ns/iter",
            "range": "429.3 … 449.9"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 276.23,
            "unit": "MB",
            "range": "273.3 … 278.26"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 257.26,
            "unit": "MB",
            "range": "255.23 … 258.93"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 274.89,
            "unit": "MB",
            "range": "271.27 … 276.76"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48591478+H01001000@users.noreply.github.com",
            "name": "Jonathan Ho",
            "username": "H01001000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e8f2218611c249d902036b184a170981e8cf7c7",
          "message": "Fix: commit not showing (#2566)\n\n* testing\r\n\r\n* remove test\r\n\r\n* fix\r\n\r\n* fix typo\r\n\r\n* chore: remove path from flag",
          "timestamp": "2022-10-31T09:35:57-05:00",
          "tree_id": "5d65fe3dfd0d416fb9191eaff307e2a68225598b",
          "url": "https://github.com/discordeno/discordeno/commit/8e8f2218611c249d902036b184a170981e8cf7c7"
        },
        "date": 1667227025689,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 2210,
            "unit": "ns/iter",
            "range": "2040 … 2990"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 147,
            "unit": "ns/iter",
            "range": "141.48 … 636.06"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 143,
            "unit": "ns/iter",
            "range": "139.63 … 159.81"
          },
          {
            "name": "[Transformer] Discord Rules to a Rules",
            "value": 465,
            "unit": "ns/iter",
            "range": "458.55 … 699.24"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 1280,
            "unit": "ns/iter",
            "range": "1280 … 1310"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 623,
            "unit": "ns/iter",
            "range": "615.99 … 672.73"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 473,
            "unit": "ns/iter",
            "range": "469.07 … 481.27"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 491,
            "unit": "ns/iter",
            "range": "486.16 … 516.75"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 501,
            "unit": "ns/iter",
            "range": "495.27 … 578.71"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 273.79,
            "unit": "MB",
            "range": "271.77 … 276.25"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 260.79,
            "unit": "MB",
            "range": "260.49 … 261.25"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 274.2,
            "unit": "MB",
            "range": "272.77 … 275.12"
          }
        ]
      }
    ]
  }
}