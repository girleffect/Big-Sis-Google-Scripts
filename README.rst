Big Sis Google Scripts
=========================

This is a repository of the Google Scripts used by Big Sis and Bol Behen.

Files
-----
t6Nopb4 ????????????????
P6jLP8 uncaught message
2F3BA findTrigger
CF364 primary lookup
CRV3HI secondary lookup
ArHXGg merged topic lookup
uncaught_message_db.gs
~~~~~~~~~~~~~~~~~~~~~~
Stores uncaught messages in this spreadsheet for review https://docs.google.com/spreadsheets/d/1w_Mw-fqZ_NI8TzDxg5-nLdT_1-xqUR79dUQFPvuWIsY. The date, time, user identifier (msisdn or FB id) and the messge received are all stored.

Used in Big Sis in the Lookup flow (as "Migrated Webhook 3") and Lookup_OB flow (as "Migrated Webhook 2").

This can be removed if Girl Effect doesn't indend to review the uncaught messages.
find_trigger.gs
~~~~~~~~~~~~~~~
Compares each word in an uncaught message to Sheet 1 of this spreadsheet https://docs.google.com/spreadsheets/d/12fCBknpNgBW7Fm4Rw7VTxK3Ym1iOWjAUby_O3qSVOls. If a match is found then the Category is returned.
It appears that the content being compared to the sheet is currently hard-coded. This has been the case since Jan 2020 (although may have only been published at a later date).

Called in Big Sis in the Lookup flow twice (once as an unreachible block called "Migrated Webhook 2" and again as "Migrated Webhook 1") and the Lookup_OB flow (as "Migrated Webhook 1"). However, the response from the script isn't used.
Called in Bol Behen in the Lookup flow (as an unreachible block called "Migrated Webhook 2") and the Lookup_OB flow (as "Migrated Webhook 1"). However, the response from the script isn't used.

This can be removed.
lookup_primary.gs
~~~~~~~~~~~~~~~~~
Compares each word in an uncaught message to Sheet 1 col A in this spreadsheet https://docs.google.com/spreadsheets/d/1Xc9hTm9lLfMFhLuusPiMjdYroZ5Epc3_ye_M6xxSLKs.
If a match is found the value in col B is returned as a topic keyword.

Called in Big Sis in the SF_Lookup V2 [DRAFT] flow (as "PrimaryResult") and Lookup_unhandled V2 Draft flow (as "PrimaryResult")
lookup_secondary.gs
~~~~~~~~~~~~~~~~~~~
Compares each word in an uncaught message to Sheet 2 col A in this spreadsheet https://docs.google.com/spreadsheets/d/1Xc9hTm9lLfMFhLuusPiMjdYroZ5Epc3_ye_M6xxSLKs.
If a match is found the value in col B is returned as a topic keyword.

Called in Big Sis in the SF_Lookup V2 [DRAFT] flow (as "SecondaryResult") and Lookup_unhanded V2 Draft flow (as "SecondaryResult")
merged_topic_lookup.gs
~~~~~~~~~~~~~~~~~~~~~~
Compares a string made up of the primary and secondary topic keywords to Sheet 3 col A in this spreadsheet https://script.google.com/a/praekelt.org/d/1Lm8gkG8kpIVpMCVi4NtHxRDqdkONHv72krUa360wNAlDe84sWZJSy3kF.
Returns the uuids, titles and names of up to 5 flows that match the topic string. Note: the "title" is the name of the flow in RapidPro while the "name" is what is displayed to the user.

Called in Big Sis in the Topic Lookup flow, multiple times in the SF_Lookup V2 [DRAFT] (as "Result" every time) and multiple times in the Lookup_unhandled V2 Draft flow (also as "Result" every time).
merged_code_lookup_old.gs
~~~~~~~~~~~~~~~~~~~~~~~~~
This appears to be an older version of merged_topic_lookup.gs (see above for more info). The only difference is that this version doesn't return the flow titles.

Called in Big Sis in the Lookup Previous flow.

bb_uncaught_message_db.gs
~~~~~~~~~~~~~~~~~~~~~~~~~
It is highly likely\* that this is the script for Bol Behen that stores uncaught messages to this spreadsheet https://docs.google.com/spreadsheets/d/18aRmYqGx-5hZDc-gLMZBJX-9-il-c05UB0h7kX7hwBc (this sheet is very large and may indeed be full) (see uncaught_message_db.gs above for more info).

\* This has a different published URL compared to the one used in the flows but the timings in the execution logs match up with the RapidPro webhook call logs.

Called in Bol Behen in the Lookup_OB flow (as "Migrated Webhook 2") and Lookup flow (as "Migrated Webhook 3").

bb_lookup.gs
~~~~~~~~~~~~
It is highly likely\* that this is the script for Bol Behen that should find the category for unrecognised messages from this sheet https://docs.google.com/spreadsheets/d/16jDQe5cslig1nZDjUvODy14iWMKSw-Q-aEC-m6kjUDo (see find_trigger.gs above for more info).

\* This has a different publishd URL compared to the one used in the flows but the timings in the execution logs match up with the RapidPro webhook call logs.

Called in Bol Behen in Lookup flow (as "Migrated Webhook 1").
