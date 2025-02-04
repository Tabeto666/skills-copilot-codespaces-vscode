// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');
const { promisify } = require('util');
const mkdirp = require('mkdirp');
const { exec } = require('child_process');

const execPromise = promisify(exec);

// Constants
const PORT = 8080;
const HOST = '