const currentStylesheet = document.cookie
    .split("; ")
    .find((row) => row.startsWith("stylesheet="))
    ?.split("=")[1];