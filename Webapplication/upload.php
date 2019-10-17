<?php
header('Access-Control-Allow-Origin: *');
if(isset($_FILES['file'])) {
    $target_path = "uploads/";
    
    $target_path = $target_path . basename( $_FILES['file']['name']);
    
    if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
        print_encoded_data(true, 'Upload and move success');
    } else{
        print_encoded_data(false, 'There was an error uploading the file, please try again!');
    }
} else {
    print_encoded_data(false, 'Missing images to upload');
}

function print_encoded_data($success, $message) {
    header('Content-type: application/json', true);
    $data = ['success' => $success, 'message' => $message];
    echo json_encode( $data );
}