<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class adminblog extends CI_Controller {
	
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('email');
    }
    public function dathang()
    {
        $this->load->view('blog/index');
    }
    public function getdathang()
    {
        // var_dump( $this->input);die;
        $firstname = $this->input->post('firstname');
       
         $lastname = $this->input->POST('lastname');
       
        $phone = $this->input->POST('phone');
        $email = $this->input->POST('email');
        $diachi = $this->input->POST('diachi');
        $noidung = $this->input->POST('noidung');

        
        if($email ){
            $this->load->model('admin/adminmodel');
            $this->adminmodel->insertMember($firstname, $lastname, $phone,$email, $diachi,$noidung);
        }
        else {
            echo 'Vui lòng nhập đúng định dạng Email';
        }
        
    }
    function email($email) {
        $this->adminmodel->checkemail($email);
      }
      
}