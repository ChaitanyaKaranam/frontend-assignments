---
title: Reusable Cards
tags: components
---

# Reusable cards

## Scenario

Your team is building social networking website. You are tasked with building a reusable Post component.
Follow the specs below and create components that will fulfill all the requirements.

## Specs for Post component

-   **Title Field**
    -   _Avatar_: User avatar.
    -   _Author_: User's name.
    -   _Date_: Date post was created.
-   **Description Field**
    -   _Content_: Post content
-   **Link Field**
    -   _Post Link_: Post image / default post image

## Requirements

-   All cards should have consistent width irrespective of content.

-   Posts should show user avatar image/ profile picture. If user did not upload his profile picture, placeholder image has to be displayed.

-   Post image should be clickable. On click, should redirect to post link. If image is not provided, use placeholder post link.

-   Title field can be reused in other parts of application. Make this a reusable component.

-   If a new field is added to post component by a different team, this should not affect existing fields.

## Data

-   Data is available at `/main/src/config/postData.js`
