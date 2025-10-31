---
sidebar_position: 10
title: Configure Monthly Limit
id: set-data-limit-wpconfig
---



# Configuring Monthly Data Collection Limit

QA Advisor limits the amount of data collected each month to **3,000 pageviews** by default.  
This helps reduce server load and ensures stable performance on most WordPress hosting environments.

If needed, you can change this limit by defining a constant in your WordPress site's `wp-config.php` file.


---

## How to Set the Monthly Data Limit

Add the following line to your `wp-config.php`, preferably above the line that says `/* That's all, stop editing! Happy publishing. */`.

```php
define( 'QAHM_LIMIT_PV_MONTH', 10000 ); // Replace 10000 with your desired monthly limit
```
- The value must be an **integer**.
- Once the limit is reached, QA Advisor will **stop collecting data** until the start of the next month.


## ⚠️ Important Notes

- Editing `wp-config.php` requires some familiarity with WordPress configuration files.  
  If you're not comfortable doing so, we recommend consulting your developer or hosting provider.
- Please use this setting with caution. Incorrect values may affect data collection or overall site performance.
- The appropriate limit depends on your **server’s performance** and **expected traffic volume**.
- The default limit of 3,000 per month is a conservative value intended to help prevent server overload.  
  However, this does not guarantee stable operation on all servers.

---

## Example Use Cases

- On a high-spec server, you might increase the limit to 10,000 or more.
- On a shared or low-resource environment, you may wish to keep the default or lower it to 1,000 for testing.
These examples help you determine a reasonable limit based on your server environment and site traffic.
