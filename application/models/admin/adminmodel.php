<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class adminmodel extends CI_Model{
    public $variable;
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function insertMember($firstname, $lastname, $phone,$email, $diachi,$noidung)
    {
        $object = array('firstname'=>$firstname, 'lastname'=>$lastname, 'phone'=>$phone, 'email'=>$email, 'diachi'=>$diachi, 'noidung'=>$noidung);
        $this->db->insert('dathang', $object);
        echo 'Đặt hàng thành công';
        
    }
    public function checkemail($email)
    {
        $this->db->where('email',$email);
        $query = $this->db->get('dathang');
        if ($query->num_rows() > 0){
            return true;
        }
        else{
            return false;
        }
    }

   
    
}
