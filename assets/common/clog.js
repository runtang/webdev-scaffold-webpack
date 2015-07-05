module.exports = function (msg) {
    try {
    	console.log(msg);
    } catch(e) {
    	console.warn('log err');
    }
};