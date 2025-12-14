type successResponse = { success: true; data: string };
type errorResponse = { success: false; error: string };
type ApiResponse = successResponse | errorResponse;

async function fetchData(id: number): Promise<ApiResponse> {
    const res = await fetch(`/api/data/${id}`);
    const json = await res.json();
    return json;

}
fetchData(1)
    .then(res => {
        if (res.success) {
            console.log("Data length:", res.data.length);
        } else {
            console.error("Error fetching data:", res.error);
        }

    })
    .catch(err => {
        console.error("Error:", err.error);
    });
