module.exports = function (msg) {
    try {
    	console.warn(msg);
    } catch(e) {
    	console.warn('warn err');
    }
};