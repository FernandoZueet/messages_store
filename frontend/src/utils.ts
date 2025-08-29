const callService = async (hass, domain, service, data = {}, target = {}) => {
    try {
        const response = await hass.connection.sendMessagePromise({
            type: "execute_script",
            sequence: [
                {
                    service: `${domain}.${service}`,
                    data,
                    target,
                    response_variable: "service_result",
                },
                { stop: "done", response_variable: "service_result" },
            ],
        });
        return response.response;
    } catch (error) {
        return {
            status: 'error',
            error
        };
    }
}

export default { callService };