This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev


# Design

## GUI

### Landing page (app/page.tsx)

Ability to create a new UAC via
- loading an export file from HGMS
- loading an existing UAC from the central repository
- loading a UAC from file
- preparing a UAC from scratch

Ability to export a UAC in JSON format

Overview on UAC such as
- list of UAC assigned to this current user
- list of UAC requested for approval by this current user including information who needs to still approve
- list of UAC to be approved by this current user

Overview on inputs
- link to latest PAD
- information on latest update to privileged activities

### Edit UAC-summary (app/[eim]/page.tsx)

Overview on access management details of the project, which
- can be edited
- in a Markdown field detailed architectural principles can be verbosely described

### Edit UAC-project (app/[eim]/[GCP-id]/edit/page.tsx)

List of access management details of the project, which
- can be edited
- can be reasoned in a comment field. Least privilege needs to be argued.
- highlight where 

### Review UAC-project (app/[eim]/[GCP-id]/review/page.tsx)



### IAM screen

- For IAM to maintain certain central configurations such as AD-groups permitted to approve


### API

Any data shall be possible to extract via an API per EIM or per project via a REST API. E.g.,
- give me a list of groups per EIM
- give me a list of groups per GCP-Project
- give me a list of members per GCP project
- give me a list of open request for approvals
- give me stats on current number of EIM, number of deviations from standard PAD, ...
- ...
