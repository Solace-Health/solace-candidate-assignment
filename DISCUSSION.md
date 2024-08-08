### Changlog of each commit in this pull request. Links for easy navigation.

- Add Advocate type [5de9b4](/../../commit/5de9b4000055106a04f172c6a85c2061c9640377)
- fix: missing key on mapped elements [bf3968](/../../commit/bf3968151eac4ebc9ed674c0ad9ba36bc22fb5e2)
- fix: incorrect type for yearsOfExperience [941fd5](/../../commit/941fd50062565ec9cedfba37150b4d1fc348417c)
- refactor: replace linebreaks with tailwind css [3ec2db](/../../commit/3ec2db043334ec5a0997c55f5f46501ff288829f)
- refactor: componentize Header [0895e4](/../../commit/0895e49498002e194930bb07ac5c014b1110399c)
- feat: Header input updates query string in url [77687b](/../../commit/77687b90fc6b591ea1fbcf3123feca7df7b2106c)
- refactor: move fetch logic into reusable method [6f55fc](/../../commit/6f55fc1a8815abe36a97fa3847a46d0ed76b8162)
- refactor: remove unused filteredAdocates from rendering [cf7d5d](/../../commit/cf7d5d72ab898d2dd9127c4a79a5a1bb5fafcf69)
- feat: track error and laoding states in fetchAdvocates [a9e30f](/../../commit/a9e30ff6ae798ada6cd802ed9a737c8e85e6f684)
- refactor: move advocate types to lib/utils [bd6744](/../../commit/bd6744d60e162dae049cefef1600dc348857db0f)
- refactor: Componentize Table [ad75fe](/../../commmit/ad75fefd360aa975852f6f844eee2370b938093c)
- fix: next.js rehydration error [b46dc7](/../../commit/b46dc7ffc0d262383335f3ad435889c424a6c751)
- refactor: replace linebreaks with tailwind css [769856](/../../commit/769856260399712773261896050957ca634010eb)
- feat: Add Spinner component [3072aa](/../../commit/3072aad135374b273e251d2d57b1e3815a9f6770)
- feat: show spinner and error message [b2f17a](/../../commit/b2f17a682a0ce78be23c056511b8298330efcf18)
- feat: use query string to update advocates api call [f4c158](/../../commit/f4c158c177d2c706feaa0eebf744d16e0663485a)
- feat: do filtering of advocates on the server [c91792](/../../commit/c917920bf815b555acc90698dc672edb569be1f5)
- refactor: rename Header component to SearchBar [0ad408](/../../commit/0ad4086480b4b76c1ae904cddc023454dea00053)
- refactor: Compnentize Header / page title [4d2b7d](/../../commit/4d2b7d25da3ae182480d6d620b716e605fdb2bdb)
- refactor: Update UI of SearchBar and Table [03acb8](/../../commit/03acb8a6b25b13007e28b41ed9ffd5dd1b513647)

### If I spent additional time here are a few thing I would do.

- Connect to a database,
- Run migrations on DB
- Run seed scripts
- Add support for pagination on the server
- Add total count to api/advocates endpoint response for use on clientside to show total records in db + calculate pages needed
- Update UI for pagination support
- Install @tanstack/react-query to handle data fetching, loading/error states, and caching of data on client
- Add unit tests for new components
