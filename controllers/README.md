# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/places` | Places index page |
| POST | `/places` | Create a new place |
| GET | `/places/new` | New form for a place |
| GET | `/places/:id` | Show one place in detail |
| PUT | `/places/:id` | Update a particular place |
| GET | `/places/:id/edit` | Edit form for a place |
| DELETE | `/places/:id` | Delete a place |
| POST | `/places/:id/rant` | Add rant to a place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant |
| GET | `*` | 404 page (matches any route not defined above) |

## Database

**places** 

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |