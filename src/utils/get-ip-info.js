export async function getIpInfo() {
    try {
        const TOKEN = '6a14e36dfd78ed';
        const response = await fetch(`https://ipinfo.io/json?token=${TOKEN}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}