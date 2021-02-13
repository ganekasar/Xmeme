import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { updateItem } from '../actions/itemActions';

class UpadteModal extends Component {

    state = {
        modal: false,
        name: '',
        link: '',
        caption: ''
    }

    constructor(props) {
        super(props);

        this.state = {
            _id: this.props._id,
            name: this.props.name,    
            link: this.props.link,
            caption: this.props.caption
        }
    }

    state = {
        modal: false,
        _id: this.props._id,
        name: this.props.name,    
        link: this.props.link,
        caption: this.props.caption
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            _id: this.state._id,
            name: this.state.name,
            link: this.state.link,
            caption: this.state.caption
        }

        // Update Item via updateItem action
        this.props.updateItem(newItem);

        // Close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                    size="sm"
                    outline color="warning"
                    onClick={this.toggle}
                >Update</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Update the Meme</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name.."
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    
                                ></Input>
                            </FormGroup>  
                            <FormGroup>    
                                <Label for="link">Link</Label>
                                <Input
                                    type="text"
                                    name="link"
                                    id="link"
                                    placeholder="Paste Link Here.."
                                    value={this.state.link}
                                    onChange={this.onChange}
                                    readOnly
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="caption">Caption</Label>
                                <Input
                                    type="textarea"
                                    name="caption"
                                    id="caption"
                                    placeholder="Add Caption.."
                                    value={this.state.caption}
                                    onChange={this.onChange}
                                ></Input>
                            </FormGroup>
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Update Item</Button>
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );

    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { updateItem })(UpadteModal);