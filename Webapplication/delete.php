<?php
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if ($contentType === "application/json") {
    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content, true);

    if (is_array($decoded)) {
        $datapath = $decoded['image'];
        $path = substr($datapath, strpos($datapath, 'uploads'));
        unlink($path);
        print_encoded_data(true, 'Image succesfully deleted');
    } else {
        print_encoded_data(false, 'Unable to delete image');
    }
} else {
    print_encoded_data(false, 'Missing image to delete');
}

function print_encoded_data($success, $message)
{
    header('Content-type: application/json', true);
    $data = ['success' => $success, 'message' => $message];
    echo json_encode($data);
}
