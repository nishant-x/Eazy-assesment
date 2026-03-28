const cron = require("node-cron");
const fs = require("fs");
const path = require("path");
const logger = require("./logger");

const LOG_DIR = path.join(__dirname, "../logs");

// run every day at 2 AM
cron.schedule("0 2 * * *", () => {

  logger.info("Running log cleanup cron job");

  fs.readdir(LOG_DIR, (err, files) => {

    if (err) {
      logger.error("Error reading log directory");
      return;
    }

    const now = Date.now();
    const fourteenDays = 14 * 24 * 60 * 60 * 1000;

    files.forEach((file) => {

      const filePath = path.join(LOG_DIR, file);

      fs.stat(filePath, (err, stats) => {

        if (err) return;

        const fileAge = now - stats.mtimeMs;

        if (fileAge > fourteenDays) {

          fs.unlink(filePath, (err) => {
            if (!err) {
              logger.info(`Deleted old log file: ${file}`);
            }
          });

        }

      });

    });

  });

});