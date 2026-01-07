<script setup lang="ts">
import { ref } from 'vue'
import MainNav from '@/components/MainNav.vue'
import { Input } from '@/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Textarea } from '@/components/ui/textarea'
import {
  Search,
  Mail,
  User,
  Lock,
  DollarSign,
  AtSign,
  Calendar,
  Eye,
  EyeOff,
  X,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from 'lucide-vue-next'

// Input demo values
const basicInput = ref('')
const emailInput = ref('')
const passwordInput = ref('')
const disabledInput = ref('Disabled value')
const readonlyInput = ref('Read-only value')
const errorInput = ref('')
const searchInput = ref('')
const amountInput = ref('')
const showPassword = ref(false)
const usernameInput = ref('')
const websiteInput = ref('')

// Checkbox demo values
const basicCheckbox = ref(false)
const checkedCheckbox = ref(true)
const disabledCheckbox = ref(false)
const disabledCheckedCheckbox = ref(true)
const indeterminateCheckbox = ref('indeterminate')
const errorCheckbox = ref(false)
const terms = ref(false)
const marketing = ref(false)
const updates = ref(true)

// Radio Group demo values
const notifyMethod = ref('email')
const plan = ref('free')
const disabledRadio = ref('option1')
const errorRadio = ref('')
const size = ref('medium')

// Toggle demo values
const basicToggle = ref(false)
const pressedToggle = ref(true)
const disabledToggle = ref(false)
const disabledPressedToggle = ref(true)
const errorToggle = ref(false)
const boldToggle = ref(false)
const italicToggle = ref(false)
const underlineToggle = ref(false)

// ToggleGroup demo values
const textAlign = ref('left')
const textFormatSingle = ref('bold')
const textFormatMultiple = ref(['bold', 'italic'])
const viewMode = ref('grid')
const disabledAlignment = ref('left')
const errorAlignment = ref('')

// Textarea demo values
const basicTextarea = ref('')
const textareaWithValue = ref('This textarea has some initial content.')
const disabledTextarea = ref('This textarea is disabled.')
const readonlyTextarea = ref('This textarea is read-only.')
const errorTextarea = ref('')
const longTextarea = ref(
  'This is a longer textarea with multiple lines of text.\n\nIt demonstrates the auto-resizing behavior of the textarea component.\n\nYou can add more lines and the textarea will grow automatically.'
)
const commentsTextarea = ref('')
</script>

<template>
  <div>
    <MainNav />
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-4">Form Components</h1>
      <p class="text-lg text-muted-foreground mb-8">
        A comprehensive showcase of all form and input components
      </p>

      <!-- Input Component Variations -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Input Component</h2>

        <div class="space-y-6 max-w-md">
          <!-- Basic Input -->
          <div>
            <label class="text-sm font-medium mb-2 block">Basic Input</label>
            <Input v-model="basicInput" placeholder="Enter text..." />
          </div>

          <!-- Email Input -->
          <div>
            <label class="text-sm font-medium mb-2 block">Email Input</label>
            <Input v-model="emailInput" type="email" placeholder="email@example.com" />
          </div>

          <!-- Password Input -->
          <div>
            <label class="text-sm font-medium mb-2 block">Password Input</label>
            <Input v-model="passwordInput" type="password" placeholder="Enter password" />
          </div>

          <!-- Number Input -->
          <div>
            <label class="text-sm font-medium mb-2 block">Number Input</label>
            <Input type="number" placeholder="Enter number" />
          </div>

          <!-- Disabled Input -->
          <div>
            <label class="text-sm font-medium mb-2 block">Disabled Input</label>
            <Input v-model="disabledInput" disabled />
          </div>

          <!-- Readonly Input -->
          <div>
            <label class="text-sm font-medium mb-2 block">Readonly Input</label>
            <Input v-model="readonlyInput" readonly />
          </div>

          <!-- Error State Input -->
          <div>
            <label class="text-sm font-medium mb-2 block">Error State (aria-invalid)</label>
            <Input v-model="errorInput" aria-invalid="true" placeholder="Invalid input" />
          </div>

          <!-- File Input -->
          <div>
            <label class="text-sm font-medium mb-2 block">File Input</label>
            <Input type="file" />
          </div>
        </div>
      </section>

      <!-- InputGroup Component Variations -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">InputGroup Component</h2>

        <div class="space-y-8 max-w-md">
          <!-- Basic InputGroup with Icon (inline-start) -->
          <div>
            <label class="text-sm font-medium mb-2 block">With Icon (inline-start)</label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>
                  <Search />
                </InputGroupText>
              </InputGroupAddon>
              <InputGroupInput v-model="searchInput" placeholder="Search..." />
            </InputGroup>
          </div>

          <!-- InputGroup with Icon (inline-end) -->
          <div>
            <label class="text-sm font-medium mb-2 block">With Icon (inline-end)</label>
            <InputGroup>
              <InputGroupInput v-model="emailInput" type="email" placeholder="Enter email" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>
                  <Mail />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <!-- InputGroup with Text Prefix -->
          <div>
            <label class="text-sm font-medium mb-2 block">With Text Prefix</label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput v-model="websiteInput" placeholder="www.example.com" />
            </InputGroup>
          </div>

          <!-- InputGroup with Text Suffix -->
          <div>
            <label class="text-sm font-medium mb-2 block">With Text Suffix</label>
            <InputGroup>
              <InputGroupInput v-model="usernameInput" placeholder="username" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>@example.com</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <!-- InputGroup with Both Sides -->
          <div>
            <label class="text-sm font-medium mb-2 block">With Icons on Both Sides</label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>
                  <DollarSign />
                </InputGroupText>
              </InputGroupAddon>
              <InputGroupInput v-model="amountInput" type="number" placeholder="0.00" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>USD</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <!-- InputGroup with Button (inline-start) -->
          <div>
            <label class="text-sm font-medium mb-2 block">With Button (inline-start)</label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupButton size="xs">
                  <Search />
                </InputGroupButton>
              </InputGroupAddon>
              <InputGroupInput placeholder="Search with button..." />
            </InputGroup>
          </div>

          <!-- InputGroup with Button (inline-end) -->
          <div>
            <label class="text-sm font-medium mb-2 block">With Button (inline-end)</label>
            <InputGroup>
              <InputGroupInput v-model="searchInput" placeholder="Enter text..." />
              <InputGroupAddon align="inline-end">
                <InputGroupButton v-if="searchInput" size="xs" @click="searchInput = ''">
                  <X />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <!-- InputGroup with Password Toggle -->
          <div>
            <label class="text-sm font-medium mb-2 block">Password with Toggle</label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>
                  <Lock />
                </InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                v-model="passwordInput"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter password"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs" @click="showPassword = !showPassword">
                  <Eye v-if="!showPassword" />
                  <EyeOff v-else />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <!-- InputGroup with Multiple Buttons -->
          <div>
            <label class="text-sm font-medium mb-2 block">With Multiple Buttons</label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupButton size="xs">
                  <User />
                </InputGroupButton>
                <InputGroupButton size="xs">
                  <AtSign />
                </InputGroupButton>
              </InputGroupAddon>
              <InputGroupInput placeholder="Username or email..." />
            </InputGroup>
          </div>

          <!-- InputGroup with block-start alignment -->
          <div>
            <label class="text-sm font-medium mb-2 block">With Label (block-start)</label>
            <InputGroup>
              <InputGroupAddon align="block-start">
                <InputGroupText>Email Address</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput type="email" placeholder="you@example.com" />
            </InputGroup>
          </div>

          <!-- InputGroup with block-end alignment -->
          <div>
            <label class="text-sm font-medium mb-2 block">With Helper (block-end)</label>
            <InputGroup>
              <InputGroupInput placeholder="Enter date" />
              <InputGroupAddon align="block-end">
                <InputGroupText>
                  <Calendar class="mr-2" />
                  Select a date from the calendar
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <!-- InputGroup Error State -->
          <div>
            <label class="text-sm font-medium mb-2 block">Error State</label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>
                  <Mail />
                </InputGroupText>
              </InputGroupAddon>
              <InputGroupInput aria-invalid="true" placeholder="invalid@email" />
            </InputGroup>
          </div>

          <!-- InputGroup Button Size Variations -->
          <div>
            <label class="text-sm font-medium mb-2 block">Button Size: xs</label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupButton size="xs">
                  <Search />
                </InputGroupButton>
              </InputGroupAddon>
              <InputGroupInput placeholder="Size xs button" />
            </InputGroup>
          </div>

          <div>
            <label class="text-sm font-medium mb-2 block">Button Size: sm</label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupButton size="sm">
                  <Search />
                </InputGroupButton>
              </InputGroupAddon>
              <InputGroupInput placeholder="Size sm button" />
            </InputGroup>
          </div>

          <div>
            <label class="text-sm font-medium mb-2 block">Button Size: icon-xs</label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupButton size="icon-xs">
                  <Search />
                </InputGroupButton>
              </InputGroupAddon>
              <InputGroupInput placeholder="Icon xs button" />
            </InputGroup>
          </div>

          <div>
            <label class="text-sm font-medium mb-2 block">Button Size: icon-sm</label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupButton size="icon-sm">
                  <Search />
                </InputGroupButton>
              </InputGroupAddon>
              <InputGroupInput placeholder="Icon sm button" />
            </InputGroup>
          </div>

          <!-- InputGroup Button Variant Variations -->
          <div>
            <label class="text-sm font-medium mb-2 block">Button Variant: ghost (default)</label>
            <InputGroup>
              <InputGroupInput placeholder="Ghost variant" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs" variant="ghost">Search</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div>
            <label class="text-sm font-medium mb-2 block">Button Variant: outline</label>
            <InputGroup>
              <InputGroupInput placeholder="Outline variant" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs" variant="outline">Search</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div>
            <label class="text-sm font-medium mb-2 block">Button Variant: secondary</label>
            <InputGroup>
              <InputGroupInput placeholder="Secondary variant" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs" variant="secondary">Search</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div>
            <label class="text-sm font-medium mb-2 block">Button Variant: destructive</label>
            <InputGroup>
              <InputGroupInput placeholder="Destructive variant" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs" variant="destructive">
                  <X />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </section>

      <!-- Textarea Component Variations -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Textarea Component</h2>

        <div class="space-y-6 max-w-md">
          <!-- Basic Textarea -->
          <div>
            <label class="text-sm font-medium mb-2 block">Basic Textarea</label>
            <Textarea v-model="basicTextarea" placeholder="Enter your text here..." />
          </div>

          <!-- Textarea with Initial Value -->
          <div>
            <label class="text-sm font-medium mb-2 block">Textarea with Initial Value</label>
            <Textarea v-model="textareaWithValue" />
          </div>

          <!-- Disabled Textarea -->
          <div>
            <label class="text-sm font-medium mb-2 block">Disabled Textarea</label>
            <Textarea v-model="disabledTextarea" disabled />
          </div>

          <!-- Readonly Textarea -->
          <div>
            <label class="text-sm font-medium mb-2 block">Readonly Textarea</label>
            <Textarea v-model="readonlyTextarea" readonly />
          </div>

          <!-- Error State Textarea -->
          <div>
            <label class="text-sm font-medium mb-2 block">Error State (aria-invalid)</label>
            <Textarea v-model="errorTextarea" aria-invalid="true" placeholder="Invalid input..." />
            <p class="text-sm text-destructive mt-2">This field is required</p>
          </div>

          <!-- Textarea with Rows -->
          <div>
            <label class="text-sm font-medium mb-2 block">Textarea with rows="3"</label>
            <Textarea placeholder="Textarea with 3 rows..." rows="3" />
          </div>

          <!-- Textarea with Rows (5) -->
          <div>
            <label class="text-sm font-medium mb-2 block">Textarea with rows="5"</label>
            <Textarea placeholder="Textarea with 5 rows..." rows="5" />
          </div>

          <!-- Textarea with Auto-resize Content -->
          <div>
            <label class="text-sm font-medium mb-2 block">Auto-resizing Textarea (field-sizing-content)</label>
            <Textarea
              v-model="longTextarea"
              placeholder="This textarea auto-resizes based on content..."
            />
            <p class="text-sm text-muted-foreground mt-2">
              This textarea uses field-sizing-content to automatically resize based on content
            </p>
          </div>

          <!-- Textarea with maxlength -->
          <div>
            <label class="text-sm font-medium mb-2 block">Textarea with maxlength="100"</label>
            <Textarea placeholder="Maximum 100 characters..." maxlength="100" />
          </div>

          <!-- Textarea with Character Counter -->
          <div>
            <label class="text-sm font-medium mb-2 block">Textarea with Character Counter</label>
            <Textarea
              v-model="commentsTextarea"
              placeholder="Enter your comments (max 200 characters)..."
              maxlength="200"
            />
            <p class="text-sm text-muted-foreground mt-2">
              {{ commentsTextarea.length }} / 200 characters
            </p>
          </div>

          <!-- Textarea with Description -->
          <div>
            <label for="bio-textarea" class="text-sm font-medium mb-2 block">Bio</label>
            <Textarea
              id="bio-textarea"
              placeholder="Tell us about yourself..."
              rows="4"
            />
            <p class="text-sm text-muted-foreground mt-2">
              Write a few sentences about yourself
            </p>
          </div>

          <!-- Textarea with Resize Control -->
          <div>
            <label class="text-sm font-medium mb-2 block">Textarea with resize="none"</label>
            <Textarea
              placeholder="This textarea cannot be resized..."
              class="resize-none"
              rows="3"
            />
          </div>

          <!-- Textarea with Horizontal Resize -->
          <div>
            <label class="text-sm font-medium mb-2 block">Textarea with resize="horizontal"</label>
            <Textarea
              placeholder="This textarea can only be resized horizontally..."
              class="resize-x"
              rows="3"
            />
          </div>

          <!-- Textarea with Vertical Resize -->
          <div>
            <label class="text-sm font-medium mb-2 block">Textarea with resize="vertical"</label>
            <Textarea
              placeholder="This textarea can only be resized vertically..."
              class="resize-y"
              rows="3"
            />
          </div>

          <!-- Full Width Textarea -->
          <div>
            <label class="text-sm font-medium mb-2 block">Full Width Textarea</label>
            <Textarea
              placeholder="This textarea spans the full width..."
              class="w-full"
            />
          </div>
        </div>
      </section>

      <!-- Checkbox Component Variations -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Checkbox Component</h2>

        <div class="space-y-6 max-w-md">
          <!-- Basic Checkbox (Unchecked) -->
          <div class="flex items-center gap-2">
            <Checkbox id="basic" v-model:checked="basicCheckbox" />
            <label
              for="basic"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Basic Checkbox (Unchecked)
            </label>
          </div>

          <!-- Checked Checkbox -->
          <div class="flex items-center gap-2">
            <Checkbox id="checked" v-model:checked="checkedCheckbox" />
            <label
              for="checked"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Checked Checkbox
            </label>
          </div>

          <!-- Disabled Checkbox (Unchecked) -->
          <div class="flex items-center gap-2">
            <Checkbox id="disabled" v-model:checked="disabledCheckbox" disabled />
            <label
              for="disabled"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Disabled Checkbox (Unchecked)
            </label>
          </div>

          <!-- Disabled Checkbox (Checked) -->
          <div class="flex items-center gap-2">
            <Checkbox id="disabled-checked" v-model:checked="disabledCheckedCheckbox" disabled />
            <label
              for="disabled-checked"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Disabled Checkbox (Checked)
            </label>
          </div>

          <!-- Indeterminate Checkbox -->
          <div class="flex items-center gap-2">
            <Checkbox id="indeterminate" v-model:checked="indeterminateCheckbox" />
            <label
              for="indeterminate"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Indeterminate Checkbox
            </label>
          </div>

          <!-- Error State Checkbox -->
          <div class="flex items-center gap-2">
            <Checkbox id="error" v-model:checked="errorCheckbox" aria-invalid="true" />
            <label
              for="error"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Error State Checkbox (aria-invalid)
            </label>
          </div>

          <!-- Multiple Checkboxes (List Example) -->
          <div>
            <div class="text-sm font-medium mb-3">Subscribe to:</div>
            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <Checkbox id="terms" v-model:checked="terms" />
                <label
                  for="terms"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
              <div class="flex items-center gap-2">
                <Checkbox id="marketing" v-model:checked="marketing" />
                <label
                  for="marketing"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Marketing emails
                </label>
              </div>
              <div class="flex items-center gap-2">
                <Checkbox id="updates" v-model:checked="updates" />
                <label
                  for="updates"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Product updates
                </label>
              </div>
            </div>
          </div>

          <!-- Checkbox with Description -->
          <div class="flex items-start gap-2">
            <Checkbox id="with-desc" class="mt-0.5" />
            <div class="grid gap-1.5 leading-none">
              <label
                for="with-desc"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Checkbox with Description
              </label>
              <p class="text-sm text-muted-foreground">
                This checkbox includes a description beneath the label to provide additional context.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- RadioGroup Component Variations -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">RadioGroup Component</h2>

        <div class="space-y-8 max-w-md">
          <!-- Basic Radio Group -->
          <div>
            <label class="text-sm font-medium mb-3 block">Basic Radio Group</label>
            <RadioGroup v-model="notifyMethod">
              <div class="flex items-center gap-2">
                <RadioGroupItem id="email" value="email" />
                <label
                  for="email"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
              </div>
              <div class="flex items-center gap-2">
                <RadioGroupItem id="sms" value="sms" />
                <label
                  for="sms"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  SMS
                </label>
              </div>
              <div class="flex items-center gap-2">
                <RadioGroupItem id="push" value="push" />
                <label
                  for="push"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Push Notification
                </label>
              </div>
            </RadioGroup>
            <p class="text-sm text-muted-foreground mt-2">
              Selected: <strong>{{ notifyMethod }}</strong>
            </p>
          </div>

          <!-- Radio Group with Descriptions -->
          <div>
            <label class="text-sm font-medium mb-3 block">Radio Group with Descriptions</label>
            <RadioGroup v-model="plan">
              <div class="flex items-start gap-2">
                <RadioGroupItem id="free" value="free" class="mt-0.5" />
                <div class="grid gap-1.5 leading-none">
                  <label
                    for="free"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Free Plan
                  </label>
                  <p class="text-sm text-muted-foreground">
                    Basic features for personal use
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-2">
                <RadioGroupItem id="pro" value="pro" class="mt-0.5" />
                <div class="grid gap-1.5 leading-none">
                  <label
                    for="pro"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Pro Plan
                  </label>
                  <p class="text-sm text-muted-foreground">
                    Advanced features for professionals
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-2">
                <RadioGroupItem id="enterprise" value="enterprise" class="mt-0.5" />
                <div class="grid gap-1.5 leading-none">
                  <label
                    for="enterprise"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Enterprise Plan
                  </label>
                  <p class="text-sm text-muted-foreground">
                    Custom solutions for large teams
                  </p>
                </div>
              </div>
            </RadioGroup>
            <p class="text-sm text-muted-foreground mt-2">
              Selected: <strong>{{ plan }}</strong>
            </p>
          </div>

          <!-- Disabled Radio Group -->
          <div>
            <label class="text-sm font-medium mb-3 block">Disabled Radio Group</label>
            <RadioGroup v-model="disabledRadio" disabled>
              <div class="flex items-center gap-2">
                <RadioGroupItem id="option1" value="option1" />
                <label
                  for="option1"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Option 1 (Selected & Disabled)
                </label>
              </div>
              <div class="flex items-center gap-2">
                <RadioGroupItem id="option2" value="option2" />
                <label
                  for="option2"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Option 2 (Disabled)
                </label>
              </div>
            </RadioGroup>
          </div>

          <!-- Individual Disabled Radio Item -->
          <div>
            <label class="text-sm font-medium mb-3 block">Individual Disabled Item</label>
            <RadioGroup v-model="size">
              <div class="flex items-center gap-2">
                <RadioGroupItem id="small" value="small" />
                <label
                  for="small"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Small
                </label>
              </div>
              <div class="flex items-center gap-2">
                <RadioGroupItem id="medium" value="medium" />
                <label
                  for="medium"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Medium (Selected)
                </label>
              </div>
              <div class="flex items-center gap-2">
                <RadioGroupItem id="large" value="large" disabled />
                <label
                  for="large"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Large (Disabled)
                </label>
              </div>
            </RadioGroup>
            <p class="text-sm text-muted-foreground mt-2">
              Selected: <strong>{{ size }}</strong>
            </p>
          </div>

          <!-- Error State Radio Group -->
          <div>
            <label class="text-sm font-medium mb-3 block">Error State (aria-invalid)</label>
            <RadioGroup v-model="errorRadio">
              <div class="flex items-center gap-2">
                <RadioGroupItem id="error-option1" value="error1" aria-invalid="true" />
                <label
                  for="error-option1"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Error Option 1
                </label>
              </div>
              <div class="flex items-center gap-2">
                <RadioGroupItem id="error-option2" value="error2" aria-invalid="true" />
                <label
                  for="error-option2"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Error Option 2
                </label>
              </div>
            </RadioGroup>
            <p class="text-sm text-destructive mt-2">
              Please select an option
            </p>
          </div>
        </div>
      </section>

      <!-- Toggle Component Variations -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Toggle Component</h2>

        <div class="space-y-6 max-w-md">
          <!-- Basic Toggle (Unpressed) -->
          <div class="flex items-center gap-3">
            <Toggle v-model:pressed="basicToggle" aria-label="Toggle basic">
              <Bold class="h-4 w-4" />
            </Toggle>
            <span class="text-sm">Basic Toggle (Unpressed)</span>
          </div>

          <!-- Pressed Toggle -->
          <div class="flex items-center gap-3">
            <Toggle v-model:pressed="pressedToggle" aria-label="Toggle pressed">
              <Bold class="h-4 w-4" />
            </Toggle>
            <span class="text-sm">Pressed Toggle</span>
          </div>

          <!-- Disabled Toggle (Unpressed) -->
          <div class="flex items-center gap-3">
            <Toggle v-model:pressed="disabledToggle" disabled aria-label="Toggle disabled">
              <Bold class="h-4 w-4" />
            </Toggle>
            <span class="text-sm">Disabled Toggle (Unpressed)</span>
          </div>

          <!-- Disabled Toggle (Pressed) -->
          <div class="flex items-center gap-3">
            <Toggle v-model:pressed="disabledPressedToggle" disabled aria-label="Toggle disabled pressed">
              <Bold class="h-4 w-4" />
            </Toggle>
            <span class="text-sm">Disabled Toggle (Pressed)</span>
          </div>

          <!-- Toggle with Text -->
          <div class="flex items-center gap-3">
            <Toggle aria-label="Toggle italic">
              <Italic class="h-4 w-4 mr-2" />
              Italic
            </Toggle>
            <span class="text-sm">Toggle with Text</span>
          </div>

          <!-- Toggle Variant: outline -->
          <div class="flex items-center gap-3">
            <Toggle variant="outline" aria-label="Toggle outline">
              <Bold class="h-4 w-4" />
            </Toggle>
            <span class="text-sm">Toggle Variant: outline</span>
          </div>

          <!-- Toggle Size: sm -->
          <div class="flex items-center gap-3">
            <Toggle size="sm" aria-label="Toggle small">
              <Bold class="h-4 w-4" />
            </Toggle>
            <span class="text-sm">Toggle Size: sm</span>
          </div>

          <!-- Toggle Size: default -->
          <div class="flex items-center gap-3">
            <Toggle size="default" aria-label="Toggle default">
              <Bold class="h-4 w-4" />
            </Toggle>
            <span class="text-sm">Toggle Size: default</span>
          </div>

          <!-- Toggle Size: lg -->
          <div class="flex items-center gap-3">
            <Toggle size="lg" aria-label="Toggle large">
              <Bold class="h-4 w-4" />
            </Toggle>
            <span class="text-sm">Toggle Size: lg</span>
          </div>

          <!-- Error State Toggle -->
          <div class="flex items-center gap-3">
            <Toggle v-model:pressed="errorToggle" aria-invalid="true" aria-label="Toggle error">
              <Bold class="h-4 w-4" />
            </Toggle>
            <span class="text-sm">Error State (aria-invalid)</span>
          </div>

          <!-- Multiple Independent Toggles -->
          <div>
            <div class="text-sm font-medium mb-3">Text Formatting (Independent Toggles)</div>
            <div class="flex items-center gap-2">
              <Toggle v-model:pressed="boldToggle" aria-label="Toggle bold">
                <Bold class="h-4 w-4" />
              </Toggle>
              <Toggle v-model:pressed="italicToggle" aria-label="Toggle italic">
                <Italic class="h-4 w-4" />
              </Toggle>
              <Toggle v-model:pressed="underlineToggle" aria-label="Toggle underline">
                <Underline class="h-4 w-4" />
              </Toggle>
            </div>
            <p class="text-sm text-muted-foreground mt-2">
              Bold: {{ boldToggle }}, Italic: {{ italicToggle }}, Underline: {{ underlineToggle }}
            </p>
          </div>
        </div>
      </section>

      <!-- ToggleGroup Component Variations -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">ToggleGroup Component</h2>

        <div class="space-y-8 max-w-md">
          <!-- Basic ToggleGroup (Single Selection) -->
          <div>
            <label class="text-sm font-medium mb-3 block">Single Selection (type="single")</label>
            <ToggleGroup v-model="textAlign" type="single">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="justify" aria-label="Align justify">
                <AlignJustify class="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <p class="text-sm text-muted-foreground mt-2">
              Selected: <strong>{{ textAlign || 'none' }}</strong>
            </p>
          </div>

          <!-- ToggleGroup with Multiple Selection -->
          <div>
            <label class="text-sm font-medium mb-3 block">Multiple Selection (type="multiple")</label>
            <ToggleGroup v-model="textFormatMultiple" type="multiple">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline class="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <p class="text-sm text-muted-foreground mt-2">
              Selected: <strong>{{ textFormatMultiple.length > 0 ? textFormatMultiple.join(', ') : 'none' }}</strong>
            </p>
          </div>

          <!-- ToggleGroup with Text -->
          <div>
            <label class="text-sm font-medium mb-3 block">With Text Labels</label>
            <ToggleGroup v-model="textFormatSingle" type="single">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold class="h-4 w-4 mr-2" />
                Bold
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic class="h-4 w-4 mr-2" />
                Italic
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline class="h-4 w-4 mr-2" />
                Underline
              </ToggleGroupItem>
            </ToggleGroup>
            <p class="text-sm text-muted-foreground mt-2">
              Selected: <strong>{{ textFormatSingle || 'none' }}</strong>
            </p>
          </div>

          <!-- ToggleGroup Variant: outline -->
          <div>
            <label class="text-sm font-medium mb-3 block">Variant: outline</label>
            <ToggleGroup v-model="viewMode" type="single" variant="outline">
              <ToggleGroupItem value="grid" aria-label="Grid view">
                Grid
              </ToggleGroupItem>
              <ToggleGroupItem value="list" aria-label="List view">
                List
              </ToggleGroupItem>
              <ToggleGroupItem value="card" aria-label="Card view">
                Card
              </ToggleGroupItem>
            </ToggleGroup>
            <p class="text-sm text-muted-foreground mt-2">
              Selected: <strong>{{ viewMode || 'none' }}</strong>
            </p>
          </div>

          <!-- ToggleGroup Size: sm -->
          <div>
            <label class="text-sm font-medium mb-3 block">Size: sm</label>
            <ToggleGroup type="single" size="sm">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight class="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <!-- ToggleGroup Size: default -->
          <div>
            <label class="text-sm font-medium mb-3 block">Size: default</label>
            <ToggleGroup type="single" size="default">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight class="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <!-- ToggleGroup Size: lg -->
          <div>
            <label class="text-sm font-medium mb-3 block">Size: lg</label>
            <ToggleGroup type="single" size="lg">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight class="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <!-- ToggleGroup with Spacing -->
          <div>
            <label class="text-sm font-medium mb-3 block">With Spacing (spacing="2")</label>
            <ToggleGroup type="single" variant="outline" :spacing="2">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight class="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <!-- Disabled ToggleGroup -->
          <div>
            <label class="text-sm font-medium mb-3 block">Disabled ToggleGroup</label>
            <ToggleGroup v-model="disabledAlignment" type="single" disabled>
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight class="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <!-- Individual Disabled Item -->
          <div>
            <label class="text-sm font-medium mb-3 block">Individual Disabled Item</label>
            <ToggleGroup type="single">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right" disabled>
                <AlignRight class="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <!-- Error State ToggleGroup -->
          <div>
            <label class="text-sm font-medium mb-3 block">Error State (aria-invalid)</label>
            <ToggleGroup v-model="errorAlignment" type="single">
              <ToggleGroupItem value="left" aria-label="Align left" aria-invalid="true">
                <AlignLeft class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center" aria-invalid="true">
                <AlignCenter class="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right" aria-invalid="true">
                <AlignRight class="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <p class="text-sm text-destructive mt-2">
              Please select an alignment
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
